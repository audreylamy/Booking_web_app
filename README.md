# Stationf Test

## Overview
🗓 Booking app (meeting room)

## Init app

1/ Init mongo DB with docker :
```
docker-machine create --driver virtualbox {{NAME}}
eval $(docker-machine env {{NAME}})
docker pull mongo
docker volume create data
docker run --name=mongodb -d -p 27017:27017 -v data:/data/db mongo
```
2/ Install npm (inside server et client)
```
npm install
```
3/ Launch app
  + Inside server folder:
```
node server.js
```
+ Inside client folder:
```
npm run serve
```
4/ Go to http://localhost:8080/

## Technology stack

+ Front-end: VueJS
+ Back-end: NodeJs, MongoDB
+ Other: Sass, BEM

