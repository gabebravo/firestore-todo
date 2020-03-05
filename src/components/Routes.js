import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Page1 from '../views/Page1';
import Page2 from '../views/Page2';
import Page3 from '../views/Page3';
import Page4 from '../views/Page4';
const NoMatch = () => 'There is nothing to see here';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/page1">
        <Page1 />
      </Route>
      <Route path="/page2">
        <Page2 />
      </Route>
      <Route path="/page3">
        <Page3 />
      </Route>
      <Route path="/page4">
        <Page4 />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
