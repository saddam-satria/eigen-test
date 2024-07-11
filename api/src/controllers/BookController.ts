import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import BookService from '../services/BookService';

@Controller('/api/v1')
@ApiTags('Book Service')
class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get('books')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'get unborrowed books',
  })
  public getBooks() {
    return this.bookService.getBooks();
  }
}

export default BookController;
