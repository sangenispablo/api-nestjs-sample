<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

### Primero clonamos y luego instalamos las dependencias con
```
yarn
```
### Levantamos postgres en Docker
```
docker-compose up -d
```
### Si queremos reiniciar la BD, borrar el contenedor en el Dashboard de Docker y luego:
```
npx prisma migrate deploy
```
### Tambien se puede usar los scripts en packaje.json
```
"db:dev:restart": "yarn db:dev:rm && yarn db:dev:up && sleep 2 && yarn prisma:dev:deploy"
```
### Para ver los datos que tienen los modelos (tablas) se puede usar:
```
npx prisma studio
```