import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Book Service')
class BookController {
  @Get('books')
  public getBooks(): string {
    return 'Get all books';
  }
}

export default BookController;
