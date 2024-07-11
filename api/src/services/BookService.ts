import { HttpStatus, Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import ResponseService from '../common/ResponseService';
import AbstractService from '../components/AbstractService';
import BookComponent from '../components/BookComponent';
import BookRepository from '../repositories/BookRepository';
import BaseResponse from '../types/shared/BaseResponse';

@Injectable()
class BookService extends AbstractService implements BookComponent {
  constructor(
    private readonly bookRepository: BookRepository,
    private readonly responseService: ResponseService,
  ) {
    super();
  }
  public async getBooks(): Promise<BaseResponse<Book[]>> {
    const books = await this.bookRepository.findUnborrowedBooks();

    return this.responseService.send(
      HttpStatus.OK,
      this.getMessage('SUCCESS', 'en'),
      books,
    );
  }
}

export default BookService;
