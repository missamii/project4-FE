import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Cars from './Cars.js'


class Search extends Component {

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


  render() {
    return(
      <div>
        <Cars />
        <button onClick={this.viewAllClick.bind(this)}>All cars</button>

      </div>
    )
  }
}

export default Search;
