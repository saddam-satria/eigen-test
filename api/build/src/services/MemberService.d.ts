import BaseResponse from 'src/common/types/BaseResponse';
import AbstractService from 'src/components/AbstractService';
import ResponseService from 'src/components/BaseResponse';
import BookRepository from 'src/repositories/BookRepository';
import MemberRepository from 'src/repositories/MemberRepository';
import { MemberWithBorrowedBook, MemberWithTotalBook } from 'src/types/member/MemberResponse';
declare class MemberService extends AbstractService {
    private memberRepository;
    private responseService;
    private bookRepository;
    constructor(memberRepository: MemberRepository, responseService: ResponseService, bookRepository: BookRepository);
    getMember(memberCode: string): Promise<BaseResponse<MemberWithTotalBook>>;
    getMembers(): Promise<BaseResponse<MemberWithTotalBook[]>>;
    getMemberBooks(memberCode: string): Promise<BaseResponse<MemberWithBorrowedBook>>;
}
export default MemberService;
