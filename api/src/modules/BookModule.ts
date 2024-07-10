import { Module } from '@nestjs/common';
import ResponseService from 'src/components/BaseResponse';
import BookController from 'src/controllers/BookController';
import BookRepository from 'src/repositories/BookRepository';
import BookService from 'src/services/BookService';

@Module({
  controllers: [BookController],
  providers: [BookService, BookRepository, ResponseService],
  exports: [BookModule],
})
class BookModule {}

export default BookModule;
