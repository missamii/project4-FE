import React, { Component } from 'react';
import Header from './Header.js';
import { Button } from 'react-bootstrap';
import { FormGroup, FormControl, FieldGroup } from 'react-bootstrap';



class MessageBoard extends Component {
constructor(props) {
  super(props);
  console.log(props);
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
        <h1>Message Board</h1>
        
        <form>
          <FieldGroup id="formControlsText" type="text" placeholder="Name" className="form" onChange={(event) => this.addName(event)} />

          <FieldGroup id="formControlsEmail" type="email" placeholder="Email" className="form" onChange={(event) => this.addEmail(event)} />

          <FormGroup controlId="formControlsTextarea">
            <FormControl componentClass="textarea" placeholder="message" className="form" onChange={(event) => this.addMessage(event)} />
          </FormGroup>

          <Button className="danger" onClick={(event) => this.props.add(event, this.state)}>Add a Post</Button>
        </form>

      </div>
    )
  }
}

export default MessageBoard;
