import { Router } from 'express';
import { usersController } from './controllers/usersController.js';

const routes = Router()

routes.get('/', usersController.listarUsuario)

routes.post('/', usersController.criarUsuario)

export { routes }
