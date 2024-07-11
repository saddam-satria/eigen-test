import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import AppModule from '../../src/modules/AppModule';

describe('MemberController (e2e)', () => {
  let app: INestApplication;

  const apis = '/api/v1/members';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const requestData = {
    memberCode: 'M001',
    books: [
      {
        code: 'JK-45',
      },
    ],
  };

  it(`${apis}  (POST)`, () => {
    return request(app.getHttpServer())
      .post(`${apis}/books/return`)
      .send(requestData)
      .expect(201)
      .expect((res) => {
        const body = res.body;

        if (!('data' in body)) throw new Error('missing data key');
        if (!('message' in body)) throw new Error('missing message key');
        if (!('statusCode' in body)) throw new Error('missing statusCode key');

        const data = body.data;
        const statusCode = body.statusCode;

        expect(statusCode).toEqual(201);
        expect(data).toEqual(requestData);
      });
  });
});
