FROM node:alpine3.18 as builder

WORKDIR /eigen-test

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY src ./src 

COPY prisma ./prisma 

COPY tsconfig.json ./

COPY tsconfig.build.json  ./

COPY nest-cli.json ./

RUN yarn prisma generate

RUN yarn run build


FROM node:alpine3.18 as final 

WORKDIR /eigen-test

COPY --from=builder /eigen-test/build ./build

COPY --from=builder /eigen-test/node_modules ./node_modules

COPY public ./public

CMD [ "node", "build/main" ]