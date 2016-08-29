import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import helpers from '../utils/helpers.js';
import axios from 'axios';

class Cars extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      searchText: "",
      res: []
    };
  }
  viewAllClick(e) {
       helpers.getAll()
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
      <div className="Cars">

        <button onClick={this.viewAllClick.bind(this)}>All cars</button>

      </div>
    )
  }
}

export default Cars;
