import { Book } from '@prisma/client';
import BaseResponse from '../types/shared/BaseResponse';

interface BookComponent {
  getBooks(): Promise<BaseResponse<Book[]>>;
}

export default BookComponent;
