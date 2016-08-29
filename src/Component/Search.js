import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Header from './Header.js'
import Cars from './Cars.js'


class Search extends Component {


  render() {
    return(
      <div>
        <Header />
        <Cars />

      </div>
    )
  }
}

export default Search;
