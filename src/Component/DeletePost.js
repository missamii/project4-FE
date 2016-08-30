import React, { Component } from  'react';
import Header from './Header.js'
import helpers from '../utils/helpers.js';


class DeletePost extends Component {
  constructor () {
    super();
    this.state = {
      name: "",
      email: "",
      message:""
    };
  }
  handleDelete(event){
  //get the delete
  }

  render() {
    return(
      <div className="DeletePost">
        <Header />
      </div>
    )
  }
}

export default DeletePost
