import React, { Component } from 'react';
import Header from './Header.js';
import { FormGroup, FormControl, FieldGroup, Form, Button, InputGroup } from 'react-bootstrap';


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
  addPicture(event) {
    this.setState ({
      message: event.target.value
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

          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl type="text" onChange={(event) => this.addEmail(event)}/>
            </InputGroup>
          </FormGroup>

          <FormGroup id="formControlsFile">
            <FormControl id="formControlsFile" type="file" label="File" className="upload" onClick={(event) => this.addPicture(event)} />
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
