import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { isISO8601 } from 'class-validator';
import ResponseService from '../common/ResponseService';
import AbstractService from '../components/AbstractService';
import MemberComponent from '../components/MemberComponent';
import BookRepository from '../repositories/BookRepository';
import MemberRepository from '../repositories/MemberRepository';
import {
  BookSchema,
  MemberBookSchema,
  MemberReturnBookSchema,
} from '../schemas/MemberSchema';
import {
  MemberWithBorrowedBook,
  MemberWithTotalBook,
} from '../types/MemberResponse';
import BaseResponse from '../types/shared/BaseResponse';

@Injectable()
class MemberService extends AbstractService implements MemberComponent {
  constructor(
    private readonly memberRepository: MemberRepository,
    private readonly responseService: ResponseService,
    private readonly bookRepository: BookRepository,
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
  public async borrowBooks(
    requestData: MemberBookSchema,
  ): Promise<BaseResponse<MemberBookSchema>> {
    if (requestData.books.length > 2)
      this.errorHandler(
        'each member only borrow 2 books',
        HttpStatus.BAD_REQUEST,
      );
    const isValidationSuccess = this.bookValidation(requestData.books);
    if (typeof isValidationSuccess === 'string') {
      throw this.errorHandler(isValidationSuccess, HttpStatus.BAD_REQUEST);
    }
    try {
      const result = await this.memberRepository.borrowBooks(requestData);

      if (result instanceof Error)
        throw this.errorHandler(result.message, HttpStatus.BAD_REQUEST);

      return this.responseService.send(
        HttpStatus.CREATED,
        this.getMessage('SUCCESS', 'en'),
        requestData,
      );
    } catch (error) {
      if (error.response && error.response.statusCode === 400) {
        throw this.errorHandler(error.message, HttpStatus.BAD_REQUEST);
      }

      throw this.errorHandler(
        this.getMessage('UNKNOWN_ERROR', 'en'),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  public async returnBooks(
    requestData: MemberReturnBookSchema,
  ): Promise<BaseResponse<MemberReturnBookSchema>> {
    const isValidationSuccess = this.bookValidation(requestData.books);

    if (typeof isValidationSuccess === 'string') {
      throw this.errorHandler(isValidationSuccess, HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.memberRepository.returnBooks(requestData);

      if (result instanceof Error)
        throw this.errorHandler(result.message, HttpStatus.BAD_REQUEST);

      return this.responseService.send(
        HttpStatus.CREATED,
        this.getMessage('SUCCESS', 'en'),
        requestData,
      );
    } catch (error) {
      if (error.response && error.response.statusCode === 400) {
        throw this.errorHandler(error.message, HttpStatus.BAD_REQUEST);
      }

      throw this.errorHandler(
        this.getMessage('UNKNOWN_ERROR', 'en'),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private bookValidation(requestData: BookSchema[]) {
    const requestBooks = {};
    for (const book of requestData) {
      if (!book.code) return 'book code is required';

      if (requestBooks[book.code]) {
        return 'cannot have the same book';
      }

      requestBooks[book.code] = book.code;
    }

    return true;
  }
}

export default MemberService;
