import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Companies from './components/Companies';
import CompanyDetail from './components/CompanyDetail';
import HomePage from './components/HomePage';

const Routes = () => {

  return (
    <Switch>
      <Route exact path='/companies'><Companies /></Route>
      <Route exact path='/companies/:id'><CompanyDetail/></Route>
      <Route exact path='/'><HomePage/></Route>
    </Switch>
  );
};

export default Routes;