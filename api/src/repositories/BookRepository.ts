import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import prismaClient from '../config/database';

@Injectable()
class BookRepository {
  public findBorrowedBookByMemberId(memberId: string) {
    return prismaClient.borrowBook.findMany({
      where: {
        member_id: memberId,
        isDeleted: false,
      },
      select: {
        bookDate: true,
        Book: {
          select: {
            author: true,
            stock: true,
            code: true,
            title: true,
            createdAt: true,
            id: true,
            updatedAt: true,
          },
        },
      },
    });
  }
  public async findUnborrowedBooks(): Promise<Book[]> {
    return await prismaClient.$queryRaw`SELECT b.id, b.code, b.title,b.author, b.stock, b."createdAt",b."updatedAt" from "Book" b where b.id not in (select DISTINCT bb.book_id from "BorrowBook" bb WHERE bb."isDeleted" = false)`;
  }
}

export default BookRepository;
