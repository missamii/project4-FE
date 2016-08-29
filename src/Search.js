import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import helpers from './utils/helpers.js';
import axios from 'axios';

class Search extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      searchText: "",
      res: []
    };
  }
  handleClick(event) {
    console.log(this);
    //this.setState({ searchText: event.target.value });
    getAllCars()
    .then((res) => {
      this.setState({
        response: res.data
      });
      console.log(res.data);
    });
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({
      searchText: event.target.value
    });
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
