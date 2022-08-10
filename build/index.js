"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
/*const express = require('express');
const routes = require('./routes');
*/
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(routes_1.routes);
server.listen(2004, () => {
    console.log('servidor on na porta 2004');
});
