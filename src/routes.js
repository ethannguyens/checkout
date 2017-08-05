import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Delivery from './components/delivery/Delivery.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Delivery} />
  </Route>
);
