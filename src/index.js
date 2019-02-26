import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import Matches from './components/Matches';
import Player from './components/Player';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div className="App">
            <main>
                <Route exact path="/" component={Matches} />
                <Route path="/player/:playername" component={Player} />
            </main>
        </div>
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
