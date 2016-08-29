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
  };
}
  name(event) {
    this.setState ({
      name: event.target.value
    });
  }
  email(event) {
    this.setState ({
      email: event.target.value
    });
  }
  message(event) {
    this.setState ({
      message: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Message Board</h1>
        <div>
          {/* maybe put a div here to contain the message output */}
        </div>

        <form className="form">
          <input placeholder="Name" className="form" onChange={(event) => this.name(event)} /> <br />
          <input placeholder="Email" className="form" onChange={(event) => this.email(event)} /> <br />
          <textarea placeholder="message" className="form" onChange={(event) => this.message(event)}/> <br />
          <button onClick={(event) => this.props.add(event, this.state)}>Submit</button>
        </form>

      </div>
      )
  }
}

export default MessageBoard;
