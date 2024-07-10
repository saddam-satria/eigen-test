import { Injectable } from '@nestjs/common';
import prismaClient from 'src/config/database';
import { MemberWithTotalBook } from 'src/types/member/MemberResponse';

@Injectable()
class MemberRepository {
  public async findMembers(): Promise<MemberWithTotalBook[]> {
    return await prismaClient.$queryRaw`SELECT m.*, (select count(*) from public."BorrowBook" b WHERE b.member_id = m.id)::integer as total_book FROM "public"."Member" m`;
  }
  public async findMemberByMemberCode(
    memberCode: string,
  ): Promise<MemberWithTotalBook[]> {
    return prismaClient.$queryRaw`SELECT m.*, (select count(*) from public."BorrowBook" b WHERE b.member_id = m.id)::integer as total_book FROM "public"."Member" m WHERE m.code = ${memberCode}`;
  }
}

export default MemberRepository;
