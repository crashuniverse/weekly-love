import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../dashboard/dashboard';

const UserDashboard = ({ match }) => (
  <div>
    <Dashboard user={match.params && match.params.id} />
  </div>
);

UserDashboard.propTypes = {
  match: PropTypes.shape({
    user: PropTypes.string.required,
  }).isRequired,
};

export default UserDashboard;
