declare class BookRepository {
    findBorrowedBookByMemberId(memberId: string): import(".prisma/client").Prisma.PrismaPromise<{
        bookDate: Date;
        Book: {
            author: string;
            stock: number;
            code: string;
            title: string;
            createdAt: Date;
            id: string;
            updatedAt: Date;
        };
    }[]>;
}
export default BookRepository;
