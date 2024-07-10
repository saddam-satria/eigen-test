import { Injectable } from '@nestjs/common';
import prismaClient from 'src/config/database';

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
}

export default BookRepository;
