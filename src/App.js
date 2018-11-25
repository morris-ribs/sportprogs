import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Matches from './components/Matches';

class App extends Component {
  /*renderOld() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }*/
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
