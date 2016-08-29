import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Header from './Header.js';

class MessageBoard extends Component {

  render() {
    return (
      <div>
        <Header />
        <h1>Message Board</h1>

      </div>
      )
  }
}

export default MessageBoard;
