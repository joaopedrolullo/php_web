import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

import AddressList from './pages/AddressList';
import Address from './pages/Address';
import AddressCreate from './pages/AddressCreate';

import UsersList from './pages/UsersList';
import User from './pages/User';
import UserCreate from './pages/UserCreate';

import CustomersList from './pages/CustomersList';
import Customer from './pages/Customer';
import CustomerCreate from './pages/CustomerCreate';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        
        <Route path="/app" component={CustomersList} />
        
        <Route path="/addresses" component={AddressList} />
        <Route path="/address/create" component={AddressCreate} />
        <Route path="/address/:id" component={Address} />

        <Route path="/users" component={UsersList} />
        <Route path="/user/create" component={UserCreate} />
        <Route path="/user/:id" component={User} />
        
        <Route path="/customers" component={CustomersList} />
        <Route path="/customer/create" component={CustomerCreate} />
        <Route path="/customer/:id" component={Customer} />
      </Switch>
    </BrowserRouter>    
  );
}

export default Routes;