import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Weekly Love</h1>
        </header>
        <p>The favorite track you are listening to this week.</p>
        <footer>API from <a href="https://www.last.fm/api" target="_blank">lastfm</a></footer>
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
