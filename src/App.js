import React, { Component } from 'react';

import './App.css';
import Matches from './components/Matches';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Welcome to betting!
        </h1>
        <Matches></Matches>
      </div>
    );
  }
}

export default App;
