# User Management REST API

## Setup

### 1.Mongo DB
####  a.Install MongoDB and create a schema named usermanagement

### 2.Node JS
####  a.Download and install node js stable version


## Installation

Navigate to project root folder and Install npm dependencies

	$ npm install

## Configuration

Configure config\config.js file with mongoDB URI , port number

## Seed DB with test data

	$ node seed.js
	
## Starting App with NPM

    $ npm start

## Starting App with PM2 

    $ pm2  start server.js -i 0 

Above command starts  server with maximum number of instance which depends on number of CPU cores



	
	

