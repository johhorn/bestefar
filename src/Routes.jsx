import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App.jsx';
import Malerier from './Malerier';
import Tekster from './Tekster';
import Biografi from './Biografi';

function Routes() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <Route path="malerier" component={Malerier} />
            <Route path="tekster" component={Tekster} />
            <Route path="om" component={Biografi} />
          </Route>
        </Router>
    );
}

export default Routes;
