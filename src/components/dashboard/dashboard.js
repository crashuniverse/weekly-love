import React from 'react';
import PropTypes from 'prop-types';
import api from '../../utilities/api/api';
import '../../index.scss';

class UserDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      track: {},
    };
  }

  componentDidMount() {
    const { user } = this.props;
    api(user)
      .then((track) => {
        this.setState({
          track,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>weekly love</h1>
          <div>The favorite track you were listening to last week.</div>
        </header>
        <div className="track-container">
          <div className="image">
            <img src={this.state && this.state.track && this.state.track.image} alt="" />
          </div>
          <div>
            <div className="track">
              {this.state && this.state.track && this.state.track.name}
            </div>
            <div className="artist">
              {this.state && this.state.track && this.state.track.artist}
            </div>
            <div className="count">
              {
                this.state && this.state.track && this.state.track.playcount &&
                `${this.state.track.playcount} times in week of
                ${this.state.track.weekStartDate} - ${this.state.track.weekEndDate}`
              }
            </div>
          </div>
        </div>
        <footer>API from <a href="https://www.last.fm/api" target="_blank" rel="noopener noreferrer">lastfm</a></footer>
      </div>
    );
  }
}

UserDashboard.propTypes = {
  user: PropTypes.string.isRequired,
};

export default UserDashboard;
