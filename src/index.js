import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UserDashboard from './components/userDashboard/userDashboard';

const App = () => (
  <Router basename="/">
    <Switch>
      <Route exact path="/">
        <Redirect to="/users/crashuniverse" />
      </Route>
      <Route path="/users/:id" component={UserDashboard} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
