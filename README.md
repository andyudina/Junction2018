# Hi there! This is the dummy nestjs app for our amazing HealthTech solution backend.

It uses nestjs framework and typescript.

Here you can read up on [NestJS](https://docs.nestjs.com/) and [Typescript](https://www.typescriptlang.org/docs/home.html)

## Why typescript?
* Easier to collaborate due to interfaces + various typescript tools
* Faster development with a softer start than javascript.
*Less buggy. Types can catch _some_ errors during compilation. But *not a replacement for tests* of course.
* Cool tech to learn🔥

## Why nestjs?
* Is written with and for Typescript
* Supports functional programming
* Out of the box application architecture - save time & effort 

## How to run it?
* install [Docker](https://www.docker.com/get-started)
* install [Docker compose](https://docs.docker.com/compose/install/#install-compose) if needed
* clone this repo
```bash
docker-compose build
```
```bash
docker-compose up
```
* App will run on http://localhost:3000/

## How to run without docker?
* install node 8 and npm
* install mongodb 4.0 and start mongod server
* clone this repo
* set up following environment variables:
  * PORT
  * MONGODB_URL
```bash
npm run start:dev
```
