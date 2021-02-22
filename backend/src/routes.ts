import { Router } from 'express';
import AddressesController from './controllers/AddressesController'
import UsersController from './controllers/UsersController'
import CustomersController from './controllers/CustomersController'
import LoginController from './controllers/LoginController';

const routes = Router();

// Endereços
routes.get('/addresses', AddressesController.index);
routes.get('/addresses/:id', AddressesController.show);
routes.post('/addresses', AddressesController.create);
routes.put('/addresses/:id', AddressesController.update);
routes.delete('/addresses/:id', AddressesController.delete);

// Usuários
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.delete);

// Clientes
routes.get('/customers', CustomersController.index);
routes.get('/customer/:id', CustomersController.show);
routes.post('/customers', CustomersController.create);
routes.put('/customers/:id', CustomersController.update);
routes.delete('/customers/:id', CustomersController.delete);

//Login
routes.post('/login', LoginController.valida);

export default routes;