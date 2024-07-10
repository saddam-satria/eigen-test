FROM node:alpine3.18 as builder

WORKDIR /app

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

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/node_modules ./node_modules

COPY public ./public

CMD [ "node", "dist/main" ]