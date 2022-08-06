import express from 'express';


/*const express = require('express');
const routes = require('./routes');
*/

const server = express();
server.use(express.json());


server.listen(2004, () => {
    console.log('servidor on na porta 2004');
})