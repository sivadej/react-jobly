import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Companies from './components/Companies';
import CompanyDetail from './components/CompanyDetail';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/companies'><Companies/></Route>
      <Route exact path='/companies/:id'><CompanyDetail/></Route>
    </Switch>
  );
};

export default Routes;