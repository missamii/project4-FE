import React, { Component } from 'react';
import helpers from '../utils/helpers.js';
import Header from './Header.js';
import MessageParts from './MessageParts.js'


class NewPost extends Component {


  create(event, message){
    event.preventDefault();
    console.log(message);
    helpers.addNew(message)
    .then((res) => {
      console.log("great post");
    });
  }



  render() {
    return (
      <div>
        <Header />
        <MessageParts add={(event, message) => this.create(event, message)} />
      </div>
        )
      }
    }


export default NewPost
