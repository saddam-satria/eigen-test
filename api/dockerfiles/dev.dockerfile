FROM node:alpine3.18

WORKDIR /eigen-test

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn install

COPY src ./src

COPY prisma ./prisma

COPY tsconfig.json ./

COPY tsconfig.build.json  ./

COPY nest-cli.json ./

COPY .eslintrc.js ./

COPY .prettierrc ./

COPY database ./database

RUN yarn prisma generate

RUN yarn run build 

CMD [ "yarn", "run" ,"start" ]