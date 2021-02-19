import { Router } from 'express';
import AddressesController from './controllers/AddressesController'
import UsersController from './controllers/UsersController'

const routes = Router();

// Endereços
routes.get('/addresses', AddressesController.index);
routes.get('/addresses/:id', AddressesController.show);
routes.post('/addresses', AddressesController.create);

// Usuários
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.delete);

export default routes;