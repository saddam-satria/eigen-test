### Eigen Test API

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
