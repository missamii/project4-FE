import React, { Component } from 'react';
import getThis from './Helpers.js';
import MessageBoard from './MessageBoard.js'


class NewPost extends Component {


  create(event, message){
    event.preventDefault();
    console.log(message);
    getThis.addNew(message)
    .then((res) => {
      console.log("great post");
    });
  }



  render() {
    return (
      <div>
        <MessageBoard add={(event, message) => this.create(event, message} />
      </div>
        )
      }
    }


export default NewPost
