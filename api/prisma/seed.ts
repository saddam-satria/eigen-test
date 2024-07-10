import { PrismaClient } from '@prisma/client';
import { bookData } from '../database/bookData';
import { memberData } from '../database/memberData';

(async () => {
  const prisma = new PrismaClient();

  await prisma.member.createMany({
    data: memberData,
  });
  await prisma.book.createMany({
    data: bookData,
  });
})();
