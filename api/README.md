### Eigen Test API

before run dev, make sure database url is correct for connect to db purpose

#### Run Dev

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
