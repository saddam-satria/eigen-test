import { Book, Member } from '@prisma/client';

export interface MemberWithTotalBook extends Member {
  total_book: number;
}

export interface MemberWithBorrowedBook extends Member {
  books: Book[];
}
