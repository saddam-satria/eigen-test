import { Module } from '@nestjs/common';
import ResponseService from '../common/ResponseService';
import BookController from '../controllers/BookController';
import BookRepository from '../repositories/BookRepository';
import BookService from '../services/BookService';

@Module({
  controllers: [BookController],
  providers: [BookService, BookRepository, ResponseService],
  exports: [BookModule],
})
class BookModule {}

export default BookModule;
