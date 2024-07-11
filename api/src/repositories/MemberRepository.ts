import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import prismaClient from '../config/database';
import {
  MemberBookSchema,
  MemberReturnBookSchema,
} from '../schemas/MemberSchema';
import { MemberWithTotalBook } from '../types/MemberResponse';

@Injectable()
class MemberRepository {
  public async findMembers(): Promise<MemberWithTotalBook[]> {
    return await prismaClient.$queryRaw`SELECT m.*, (select count(*) from public."BorrowBook" b WHERE b.member_id = m.id and b."isDeleted" = false)::integer as total_book FROM "public"."Member" m`;
  }
  public async findMemberByMemberCode(
    memberCode: string,
  ): Promise<MemberWithTotalBook[]> {
    return prismaClient.$queryRaw`SELECT m.*, (select count(*) from public."BorrowBook" b WHERE b.member_id = m.id and b."isDeleted" = false)::integer as total_book FROM "public"."Member" m WHERE m.code = ${memberCode}`;
  }

  public borrowBooks(
    data: MemberBookSchema,
  ): Promise<MemberBookSchema | Error> {
    return prismaClient.$transaction(async (ctx) => {
      const member = await ctx.member.findFirst({
        where: {
          code: data.memberCode,
        },
        select: {
          id: true,
          isPenalty: true,
          penaltyOver: true,
        },
      });

      if (!member) return new Error('member not found, abort transaction');
      if (member.isPenalty)
        return new Error('member is subject penalty, abort transaction');

      const now = moment().add(7, 'hours');
      const memberPenaltyDate = moment(member.penaltyOver);

      const dayDiff = memberPenaltyDate.diff(now, 'days');

      if (dayDiff > 0)
        return new Error('member is subject penalty, abort transaction');

      if (member.isPenalty && dayDiff < 1) {
        await ctx.member.update({
          where: {
            id: member.id,
          },
          data: {
            penaltyOver: null,
            isPenalty: false,
          },
        });
      }

      const books = await ctx.book.findMany({
        where: {
          code: {
            in: data.books.map((book) => book.code),
          },
        },
        select: {
          id: true,
          code: true,
          stock: true,
        },
      });

      if (books.length !== data.books.length)
        return new Error('book not found, abort transaction');

      const requestedBook = {};

      for (const book of data.books) {
        requestedBook[book.code] = book.code;
      }

      for (const book of books) {
        if (requestedBook[book.code] > book.stock)
          return new Error(`book ${book.code} out of stock, abort transaction`);

        const currentStock = book.stock - 1;

        await ctx.book.update({
          where: {
            id: book.id,
          },
          data: {
            stock: currentStock,
          },
        });
      }

      const currentMemberBorrowBooks = await ctx.borrowBook.findMany({
        where: {
          isDeleted: false,
          member_id: member.id,
          book_id: {
            in: books.map((book) => book.id),
          },
        },
      });

      if (currentMemberBorrowBooks.length > 0)
        return new Error(
          'member has already borrow the book, abort transaction',
        );

      await ctx.borrowBook.createMany({
        data: books.map((book) => ({
          member_id: member.id,
          book_id: book.id,
          bookDate: now.toISOString(),
        })),
      });

      return data;
    });
  }
  public returnBooks(
    data: MemberReturnBookSchema,
  ): Promise<MemberReturnBookSchema | Error> {
    return prismaClient.$transaction(async (ctx) => {
      const member = await ctx.member.findFirst({
        where: {
          code: data.memberCode,
        },
        select: {
          id: true,
          isPenalty: true,
          penaltyOver: true,
        },
      });

      if (!member) return new Error('member not found, abort transaction');

      const books = await ctx.book.findMany({
        where: {
          code: {
            in: data.books.map((book) => book.code),
          },
        },
        select: {
          id: true,
        },
      });

      if (books.length !== data.books.length)
        return new Error('book not found, abort transaction');

      const borrowedBooks = await ctx.borrowBook.findMany({
        where: {
          book_id: {
            in: books.map((book) => book.id),
          },
          member_id: member.id,
          isDeleted: false,
        },
        select: {
          book_id: true,
          member_id: true,
          Book: {
            select: {
              stock: true,
              code: true,
            },
          },
          bookDate: true,
          isDeleted: true,
        },
      });

      if (borrowedBooks.length < 1)
        return new Error('books have been returned');

      let returnDate = moment();

      for (const book of borrowedBooks) {
        const bookDate = moment(book.bookDate);
        const maxReturnDate = bookDate.add(7, 'days');
        const now = moment().add(7, 'hours');

        if (data.returnDate) {
          returnDate = moment(data.returnDate);
        }

        if (!data.returnDate) {
          returnDate = now;
        }

        const diffDays = maxReturnDate.diff(returnDate, 'days');

        if (diffDays < 1) {
          await ctx.member.update({
            data: {
              isPenalty: true,
              penaltyOver: now.add(3, 'days').toISOString(),
            },
            where: {
              id: member.id,
            },
          });
        }

        await ctx.book.update({
          where: {
            id: book.book_id,
          },
          data: {
            stock: book.Book.stock + 1,
          },
        });
      }

      await ctx.borrowBook.updateMany({
        where: {
          book_id: {
            in: books.map((book) => book.id),
          },
        },
        data: {
          isDeleted: true,
          returnDate: returnDate.toISOString(),
        },
      });

      return data;
    });
  }
}

export default MemberRepository;
