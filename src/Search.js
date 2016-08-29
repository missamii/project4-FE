import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import helpers from './utils/helpers.js';
import axios from 'axios';

class SearchResults extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.data);
    const imgSrc = 'https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId=200477465&fmt=json&api_key=2sresewmhswymakttj4ppvnv' +this.props.data.id +'.png';

  }

  render() {
    return(
      <div className="Search">
        <button>Test</button>
      </div>
    )
  }
}

export default Search;
