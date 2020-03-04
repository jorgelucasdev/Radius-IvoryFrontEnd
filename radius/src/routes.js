import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';
import EsqueciSenha from './pages/login/EsqueciSenha';
import FaleConosco from './pages/login/faleconosco';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/esquecisenha/" component={EsqueciSenha} />
            <Route path="/faleconosco/" component={FaleConosco} />
        </Switch>
    </BrowserRouter>
); 

export default Routes;