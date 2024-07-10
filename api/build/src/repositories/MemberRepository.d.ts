import { MemberWithTotalBook } from 'src/types/member/MemberResponse';
declare class MemberRepository {
    findMembers(): Promise<MemberWithTotalBook[]>;
    findMemberByMemberCode(memberCode: string): Promise<MemberWithTotalBook[]>;
}
export default MemberRepository;
