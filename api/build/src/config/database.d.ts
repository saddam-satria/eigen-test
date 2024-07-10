import { PrismaClient } from '@prisma/client';
declare const prismaClient: PrismaClient<{
    log: ({
        emit: "stdout";
        level: "query";
    } | {
        emit: "stdout";
        level: "error";
    } | {
        emit: "stdout";
        level: "info";
    } | {
        emit: "stdout";
        level: "warn";
    })[];
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
export default prismaClient;
