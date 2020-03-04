import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';
import EsqueciSenha from './pages/login/EsqueciSenha';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/esquecisenha/" component={EsqueciSenha} />
        </Switch>
    </BrowserRouter>
); 

export default Routes;