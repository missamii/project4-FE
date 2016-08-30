import React, { Component } from 'react';
import Header from './Header.js';
import { Button } from 'react-bootstrap';
import { FormGroup, FormControl, FieldGroup, Form } from 'react-bootstrap';


class MessageBoard extends Component {
constructor(props) {
  super(props);
  console.log(props);
  this.state = {
    name: "",
    email: "",
    message: ""
  };
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
        <h1>Message Board</h1>

        <form>
          <FormGroup controlId="formControlsText">
          <FormControl placeholder="Name" onChange={(event) => this.addName(event)} />
          </FormGroup>

          <FormGroup controlId="formControlsEmail">

          <FormControl placeholder="Email" onChange={(event) => this.addEmail(event)} />
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <FormControl placeholder="Message" componentClass="textarea" onChange={(event) => this.addMessage(event)} />
          </FormGroup>

          <Button bsStyle="danger" onClick={(event) => this.props.add(event, this.state)}>Add a Post</Button>
        </form>

      </div>
    )
  }
}

export default MessageBoard;
