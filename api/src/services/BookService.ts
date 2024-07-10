import { Injectable } from '@nestjs/common';
import AbstractService from 'src/components/AbstractService';

@Injectable()
class BookService extends AbstractService {}

export default BookService;
