import express  from 'express';
import { routes } from './routes';

/*const express = require('express');
const routes = require('./routes');
*/

const server = express();
server.use(express.json());
server.use(routes)


server.listen(2004, () => {
    console.log('servidor on na porta 2004');
})