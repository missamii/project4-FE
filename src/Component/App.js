import React, { Component } from 'react';
import { Link } from 'react-router';
import Search from './Search.js';
import Cars from './Cars.js'
import '../App.css';


class App extends Component {



  render() {
    return (
      <div>
          <Search />
      </div>
    );
  }
}

export default App;
