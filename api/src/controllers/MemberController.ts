import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import ResponseService from 'src/components/BaseResponse';
import MemberService from 'src/services/MemberService';

@Controller()
@ApiTags('Member Service')
class MemberController {
  constructor(
    private memberService: MemberService,
    private responseService: ResponseService,
  ) {}
  @Get('members/:code')
  @ApiParam({
    required: true,
    name: 'code',
    example: 'M001',
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
}

export default MemberController;
