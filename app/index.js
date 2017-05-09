import React from 'react';
import { render } from 'react-dom';
import api from './utilities/api/api';
import './index.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      track: {},
    };
  }

  componentDidMount() {
    const username = 'crashuniverse';
    api(username)
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
          <h1>Weekly Love</h1>
        </header>
        <p>The favorite track you are listening to this week.</p>
        <div>{ this.state && this.state.track && this.state.track.name }</div>
        <div>{ this.state && this.state.track && this.state.track.artist }</div>
        <div>
          <img src={this.state && this.state.track && this.state.track.image} alt="" />
        </div>
        <footer>API from <a href="https://www.last.fm/api" target="_blank" rel="noopener noreferrer">lastfm</a></footer>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
