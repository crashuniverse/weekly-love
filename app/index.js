import React from 'react';
import { render } from 'react-dom';
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
    const apiKey = '1d135f71576245c162267ffee970359e';
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=${username}&api_key=${apiKey}&format=json`;
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        const trackRaw = json &&
          json.weeklytrackchart &&
          json.weeklytrackchart.track &&
          json.weeklytrackchart.track[0];
        const track = Object.assign({}, {
          name: trackRaw.name,
          playcount: trackRaw.playcount,
          url: trackRaw.url,
          artist: trackRaw.artist['#text'],
          image: trackRaw.image && trackRaw.image.filter(image => image.size === 'large'),
        });
        this.setState({
          track,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
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
          <img src={this.state && this.state.track && this.state.track.image && this.state.track.image[0] && this.state.track.image[0]['#text']} alt="" />
        </div>
        <footer>API from <a href="https://www.last.fm/api" target="_blank" rel="noopener noreferrer">lastfm</a></footer>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
