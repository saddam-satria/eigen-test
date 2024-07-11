import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import AppModule from '../../src/modules/AppModule';

describe('BookController (e2e)', () => {
  let app: INestApplication;

  const apis = '/api/v1/books';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const expectedBook = {
    code: 'SHR-1',
    title: 'A Study in Scarlet',
    author: 'Arthur Conan Doyle',
    stock: 1,
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

        const bookObj = data[0];
        const firstData = data
          .filter((item) => item.code === 'SHR-1')
          .map(({ code, title, author, stock }) => ({
            code,
            title,
            author,
            stock,
          }))[0];

        if (!('code' in bookObj)) throw new Error('missing code key');
        if (!('title' in bookObj)) throw new Error('missing title key');
        if (!('stock' in bookObj)) throw new Error('missing stock key');
        if (!('author' in bookObj)) throw new Error('missing author key');

        const statusCode = body.statusCode;
        expect(statusCode).toEqual(200);
        expect(firstData).toEqual(expectedBook);
      });
  });
});
