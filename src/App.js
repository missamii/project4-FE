import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';
import Search from './Search';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This page works!</h1>
          <center><button className="button"><Link id="link" to="/search">Enter</Link></button></center>
            {this.props.children}
      </div>
    );
  }
}

export default App;
