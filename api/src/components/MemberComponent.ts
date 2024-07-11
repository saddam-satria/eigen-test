import {
  MemberBookSchema,
  MemberReturnBookSchema,
} from '../schemas/MemberSchema';
import {
  MemberWithBorrowedBook,
  MemberWithTotalBook,
} from '../types/MemberResponse';
import BaseResponse from '../types/shared/BaseResponse';

interface MemberComponent {
  getMember(memberCode: string): Promise<BaseResponse<MemberWithTotalBook>>;
  getMembers(): Promise<BaseResponse<MemberWithTotalBook[]>>;
  getMemberBooks(
    memberCode: string,
  ): Promise<BaseResponse<MemberWithBorrowedBook>>;
  borrowBooks(
    requestData: MemberBookSchema,
  ): Promise<BaseResponse<MemberBookSchema>>;
  returnBooks(
    requestData: MemberReturnBookSchema,
  ): Promise<BaseResponse<MemberReturnBookSchema>>;
}

export default MemberComponent;
