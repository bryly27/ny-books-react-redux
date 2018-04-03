import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Books from './components/Books/Books';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Books} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
