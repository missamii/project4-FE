import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Header from './Header.js';

class About extends Component {

  render() {
    return (
      <div>
        <Header />
        <h1>About Page</h1>

      </div>
      )
  }
}

export default About
