import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import BaseResponse from 'src/common/types/BaseResponse';
import AbstractService from 'src/components/AbstractService';
import ResponseService from 'src/components/BaseResponse';
import BookRepository from 'src/repositories/BookRepository';
import MemberRepository from 'src/repositories/MemberRepository';
import {
  MemberWithBorrowedBook,
  MemberWithTotalBook,
} from 'src/types/member/MemberResponse';

@Injectable()
class MemberService extends AbstractService {
  constructor(
    private memberRepository: MemberRepository,
    private responseService: ResponseService,
    private bookRepository: BookRepository,
  ) {
    super();
  }
  public async getMember(
    memberCode: string,
  ): Promise<BaseResponse<MemberWithTotalBook>> {
    const member = await this.memberRepository.findMemberByMemberCode(
      memberCode,
    );

    if (member.length < 1)
      throw new HttpException(
        this.responseService.send(
          HttpStatus.NOT_FOUND,
          this.getMessage('NOT_FOUND', 'en'),
          HttpStatus.NOT_FOUND,
        ),
        HttpStatus.NOT_FOUND,
      );

    return this.responseService.send(
      HttpStatus.OK,
      this.getMessage('SUCCESS', 'en'),
      member[0],
    );
  }
  public async getMembers(): Promise<BaseResponse<MemberWithTotalBook[]>> {
    const members = await this.memberRepository.findMembers();

    return this.responseService.send(
      HttpStatus.OK,
      this.getMessage('SUCCESS', 'en'),
      members,
    );
  }
  public async getMemberBooks(
    memberCode: string,
  ): Promise<BaseResponse<MemberWithBorrowedBook>> {
    const member = await this.memberRepository.findMemberByMemberCode(
      memberCode,
    );

    if (member.length < 1)
      throw new HttpException(
        this.responseService.send(
          HttpStatus.NOT_FOUND,
          this.getMessage('NOT_FOUND', 'en'),
          HttpStatus.NOT_FOUND,
        ),
        HttpStatus.NOT_FOUND,
      );

    const memberBooks = await this.bookRepository.findBorrowedBookByMemberId(
      member[0].id,
    );

    return this.responseService.send(
      HttpStatus.OK,
      this.getMessage('SUCCESS', 'en'),
      {
        ...member[0],
        books: memberBooks.map(
          ({
            Book: { author, code, stock, createdAt, title, updatedAt, id },
          }) => ({ author, code, stock, createdAt, title, updatedAt, id }),
        ),
      },
    );
  }
}

export default MemberService;
