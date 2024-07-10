"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bookData_1 = require("../database/bookData");
const memberData_1 = require("../database/memberData");
(async () => {
    const prisma = new client_1.PrismaClient();
    await prisma.member.createMany({
        data: memberData_1.memberData,
    });
    await prisma.book.createMany({
        data: bookData_1.bookData,
    });
})();
//# sourceMappingURL=seed.js.map