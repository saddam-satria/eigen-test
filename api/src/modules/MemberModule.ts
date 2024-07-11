import { Module } from '@nestjs/common';
import ResponseService from '../common/ResponseService';
import MemberController from '../controllers/MemberController';
import BookRepository from '../repositories/BookRepository';
import MemberRepository from '../repositories/MemberRepository';
import MemberService from '../services/MemberService';

@Module({
  controllers: [MemberController],
  providers: [MemberService, MemberRepository, ResponseService, BookRepository],

  exports: [MemberModule],
})
class MemberModule {}

export default MemberModule;
