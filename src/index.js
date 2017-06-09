import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserDashboard from './components/userDashboard/userDashboard';

const App = () => (
  <Router>
    <Route path="/" component={UserDashboard} />
  </Router>
);

render(<App />, document.getElementById('root'));
