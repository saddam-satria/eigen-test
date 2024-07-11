import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsISO8601, IsNotEmpty, IsOptional } from 'class-validator';

export class BookSchema {
  @ApiProperty({
    example: 'JK-45',
    description: 'Book Code',
    type: 'string',
    required: true,
  })
  @IsNotEmpty({
    message: 'book code is not empty',
  })
  code: string;

  constructor(code: string, quantity: number) {
    this.code = code;
  }
}

export class MemberBookSchema {
  @ApiProperty({
    example: 'M001',
    description: 'Member Code',
    type: 'string',
    required: true,
  })
  @IsNotEmpty({
    message: 'member code is not empty',
  })
  memberCode: string;

  @ApiProperty({
    examples: [
      {
        code: 'JK-45',
      },
    ],
    description: 'Borrowed Books',
    type: [BookSchema],
    required: true,
  })
  @IsArray({
    message: 'should list of books',
  })
  books: BookSchema[];

  constructor(memberCode: string, books: BookSchema[]) {
    this.memberCode = memberCode;
    this.books = books;
  }
}

export class MemberReturnBookSchema {
  @ApiProperty({
    examples: [
      {
        code: 'JK-45',
        quantity: 1,
      },
    ],
    description: 'Borrowed Books',
    type: [BookSchema],
    required: true,
  })
  @IsArray({
    message: 'should list of books',
  })
  books: BookSchema[];
  @ApiProperty({
    example: 'M001',
    description: 'Member Code',
    type: 'string',
    required: true,
  })
  @IsNotEmpty({
    message: 'member code is not empty',
  })
  memberCode: string;
  @ApiProperty({
    example: '2024-07-11T05:09:39Z',
    description: 'Return Date is ISO Format, if empty will replace by now()',
    type: 'iso8601',
    required: true,
  })
  @IsISO8601()
  @IsOptional()
  returnDate: string;

  constructor(memberCode: string, books: BookSchema[], returnDate: string) {
    this.memberCode = memberCode;
    this.returnDate = returnDate;
    this.books = books;
  }
}
