import ResponseService from 'src/components/BaseResponse';
import MemberService from 'src/services/MemberService';
declare class MemberController {
    private memberService;
    private responseService;
    constructor(memberService: MemberService, responseService: ResponseService);
    getMember(code: string): Promise<import("../common/types/BaseResponse").default<import("../types/member/MemberResponse").MemberWithTotalBook>>;
    getMemberBooks(code: string): Promise<import("../common/types/BaseResponse").default<import("../types/member/MemberResponse").MemberWithBorrowedBook>>;
    getMembers(): Promise<import("../common/types/BaseResponse").default<import("../types/member/MemberResponse").MemberWithTotalBook[]>>;
}
export default MemberController;
