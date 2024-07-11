### Eigen Test API

rename .env.example to .env
before run dev, make sure database url is correct for connect to db purpose

#### Run Dev
base URL: /api/v1
Swagger docs /api/docs
```
yarn start:dev
```

#### Run Dev Debug

```
yarn start:debug
```

#### Run Build

```
yarn build
```

#### Run Production

```
yarn start
```

#### Run Test

```
yarn test:e2e
```

#### Migrate DB

```
yarn db:migrate
```

#### Database Seed

```
yarn db:seed
```

#### Database Reset Data

```
yarn db:reset
```

#### Docker Compose

```
docker-compose -f container.yaml up -d
```

#### Docker Migration (dev mode)

```
docker exec api_container yarn run db:migrate
```

#### Docker Seeder (dev mode)

```

docker exec api_container yarn run db:seed

```

#### Docker Run Test Case (dev mode)

```

docker exec api_container yarn run test:e2e

```
