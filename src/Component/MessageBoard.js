import React, { Component } from 'react'
import helpers from '../utils/helpers.js'
import Header from './Header.js';
import { Button } from 'react-bootstrap';


class MessageBoard extends Component {
    constructor(props){
    super(props);
    console.log(props);
    this.state = {
      response: []
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
    const post = this.state.response;
    const index = 0;
     return (
      <div className="main">
        <Header />

        <Button onClick={this.viewAllClick.bind(this)}>All Posts</Button>
      </div>
    );
  }
}

export default MessageBoard
