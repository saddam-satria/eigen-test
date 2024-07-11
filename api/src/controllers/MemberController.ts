import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  MemberBookSchema,
  MemberReturnBookSchema,
} from '../schemas/MemberSchema';
import MemberService from '../services/MemberService';

@Controller('/api/v1')
@ApiTags('Member Service')
class MemberController {
  constructor(private readonly memberService: MemberService) {}
  @Get('members/:code')
  @ApiParam({
    required: true,
    name: 'code',
    example: 'M001',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'get detail member with total borrowed books',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'member not found',
  })
  public getMember(@Param('code') code: string) {
    return this.memberService.getMember(code);
  }
  @Get('members/:code/books')
  @ApiParam({
    required: true,
    name: 'code',
    example: 'M001',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'get detail member with borrowed books',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'member not found',
  })
  public getMemberBooks(@Param('code') code: string) {
    return this.memberService.getMemberBooks(code);
  }
  @Get('members')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'get all members with total borrowed book ',
  })
  @HttpCode(HttpStatus.OK)
  public getMembers() {
    return this.memberService.getMembers();
  }
  @Post('/members/books/borrow')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'member borrow books',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'request body wrong format or empty',
  })
  public postBorrowBook(@Body() requestData: MemberBookSchema) {
    return this.memberService.borrowBooks(requestData);
  }
  @Post('/members/books/return')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'member return books',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'request body wrong format or empty',
  })
  public returnBorrowedBook(@Body() requestData: MemberReturnBookSchema) {
    return this.memberService.returnBooks(requestData);
  }
}

export default MemberController;
