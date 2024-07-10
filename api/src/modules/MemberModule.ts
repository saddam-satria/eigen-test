import { Module } from '@nestjs/common';
import ResponseService from 'src/components/BaseResponse';
import MemberController from 'src/controllers/MemberController';
import BookRepository from 'src/repositories/BookRepository';
import MemberRepository from 'src/repositories/MemberRepository';
import MemberService from 'src/services/MemberService';

@Module({
  controllers: [MemberController],
  providers: [MemberService, MemberRepository, ResponseService, BookRepository],
  exports: [MemberModule],
})
class MemberModule {}

export default MemberModule;
