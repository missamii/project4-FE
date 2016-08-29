import React, { Component } from 'react';
import Header from './Header.js';

class MessageBoard extends Component {
constructor(props) {
  super(props);
  // console.log(props);
  this.state = {
    name: "",
    email: "",
    message: ""
  }
}
  addName(event) {
    this.setState ({
      name: event.target.value
    });
  }
  addEmail(event) {
    this.setState ({
      email: event.target.value
    });
  }
  addMessage(event) {
    this.setState ({
      message: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Message Board</h1>

        <form className="form">
          <input placeholder="Name" className="form" onChange={(event) => this.addName(event)} /> <br />
          <input placeholder="Email" className="form" onChange={(event) => this.addEmail(event)} /> <br />
          <textarea placeholder="message" className="form" onChange={(event) => this.addMessage(event)}/> <br />
          <button onClick={(event) => this.props.add(event, this.state)}>Add a Post</button>
        </form>

      </div>
      )
  }
}

export default MessageBoard;
