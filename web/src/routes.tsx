import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import CustomersList from './pages/CustomersList';
import AddressList from './pages/AddressList';
import UsersList from './pages/UsersList';
import Customer from './pages/Customer';
import Address from './pages/Address';
import User from './pages/User';
import UserCreate from './pages/UserCreate';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        
        <Route path="/app" component={CustomersList} />
        
        <Route path="/addresses" component={AddressList} />
        <Route path="/address" component={Address} />

        <Route path="/users" component={UsersList} />
        <Route path="/user/create" component={UserCreate} />
        <Route path="/user/:id" component={User} />
        
        <Route path="/customer" component={Customer} />              
      </Switch>
    </BrowserRouter>    
  );
}

export default Routes;