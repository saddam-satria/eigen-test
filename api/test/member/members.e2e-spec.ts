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

  const expectedMember = {
    code: 'M001',
    name: 'Angga',
  };

  it(`${apis}  (GET)`, () => {
    return request(app.getHttpServer())
      .get(apis)
      .expect(200)
      .expect((res) => {
        const body = res.body;
        const data = body.data;

        if (!('data' in body)) throw new Error('missing data key');
        if (!('message' in body)) throw new Error('missing message key');
        if (!('statusCode' in body)) throw new Error('missing statusCode key');

        const memberObj = data[0];
        const firstData = data
          .filter((item) => item.code === 'M001')
          .map(({ code, name }) => ({
            code,
            name,
          }))[0];

        if (!('code' in memberObj)) throw new Error('missing code key');
        if (!('name' in memberObj)) throw new Error('missing name key');
        const statusCode = body.statusCode;

        expect(statusCode).toEqual(200);
        expect(firstData).toEqual(expectedMember);
      });
  });
});
