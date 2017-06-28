import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import UserDashboard from './components/userDashboard/userDashboard';

const App = () => (
  <Router>
    <div>
      <Route path="/users/:id" component={UserDashboard} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
