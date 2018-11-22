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
  + See inside BDD:
  ```
  docker exec -it mongodb bash
  open mongo with "mongo" in the shell
  use stationf
  db.books.find()
  ```
  
2/ Git clone the repository
```
https://github.com/audreylamy/Stationf_test.git
```
3/ Install npm (inside server et client)
```
npm install
```
4/ Launch app
  + Inside server folder:
```
node server.js
```
+ Inside client folder:
```
npm run serve
```
5/ Go to http://localhost:8080/

## Technology stack

+ Front-end: VueJS
+ Back-end: NodeJs, MongoDB
+ Other: Sass, BEM


