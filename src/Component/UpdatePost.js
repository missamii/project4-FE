import React, { Component } from  'react';
import Header from './Header.js'
import helpers from '../utils/helpers.js';
import { FormGroup, FormControl, FieldGroup, Form, Button, InputGroup } from 'react-bootstrap';


class UpdatePost extends Component {
  constructor () {
    super();
    this.state = {
      name: "",
      email: "",
      message:""
    };
  }

  handleName(event) {
      this.setState({
        name: event.target.value
      });
    }

  handleEmail(event){
    this.setState({
      email: event.target.value
    });
  }

  handleMessage(event){
    this.setState({
      message: event.target.value
    });
  }

  handleUpdatedPost(event) {
    event.preventdefault();
    console.log(this.state);
    getUpdate.update(this.state).then((res => {
      console.log("updated", res);
    }));
  }
    //to finish handle for backend
    //make a route for UpdatePost to get rid of console error

  render() {
    const updates = this.state.response;
    console.log(updates);
    return(
      <div className="UpdatePost">
        <Header />
          <form onSubmit={this.handleUpdatedPost.bind(this)}>
            <FormGroup controlId="formControlsText">
              <FormControl placeholder="New Name" onChange={this.handleName.bind(this)} />
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text" onChange={this.handleEmail.bind(this)} />
              </InputGroup>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <FormControl placeholder="Message" componentClass="textarea" onChange={this.handleMessage.bind(this)} />
            </FormGroup>

            <Button bsStyle="danger" onClick={(event) => this.props.add(event, this.state)}>Add a Post</Button>
          </form>
      </div>
    )
  }
}

export default UpdatePost
