import React, { Component } from  'react';
import Header from './Header.js'
import helpers from '../utils/helpers.js';
import { FormGroup, FormControl, FieldGroup, Form, Button, InputGroup, Modal } from 'react-bootstrap';
import '../UpdatePost.css';


class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      newName: "",
      newEmail: "",
      newMessage:""
    };
  }

  handleOldName(event) {
    this.setState({
      name: event.target.value
    })
  }


  handleNewName(event) {
      this.setState({
        newName: event.target.value
      });
    }

  handleNewEmail(event){
    this.setState({
      newEmail: event.target.value
    });
  }

  handleNewMessage(event){
    this.setState({
      newMessage: event.target.value
    });
  }

  handleUpdatedPost() {
    console.log(this.state);
    //name: this.state.name,
    const data = {newName: this.state.newName, email: this.state.newEmail, message: this.state.newMessage}
    helpers.update(this.state.name, data).then((res => {
      console.log("updated", res);
    }));
  }


  getInitialState() {
    return { show: false };
 }

  render() {
    const updates = this.state;
    console.log(updates);
    let close = () => this.setState({ show: false});
    return(
      <div className="model-container" style={{height: 200}} >
        <Button
          bsStyle="primary" onClick={() => this.setState({ show: true})}>Edit Post</Button>
          <Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
          <form className="updateForm">
           <FormGroup controlId="formControlsText">
              <FormControl placeholder="Existing Name" onChange={this.handleOldName.bind(this)} />
            </FormGroup>

            <FormGroup controlId="formControlsText">
              <FormControl placeholder="New Name" onChange={this.handleNewName.bind(this)} />
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text" onChange={this.handleNewEmail.bind(this)} />
              </InputGroup>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <FormControl placeholder="Message" componentClass="textarea" onChange={this.handleNewMessage.bind(this)} />
            </FormGroup>

            <Button clasName="upPostB" bsStyle="danger" onClick={(event) => this.handleUpdatedPost(event)}>Update Post</Button>

          <Modal.Footer>
          <Button onClick={close}>Close</Button>
          </Modal.Footer>
          </form>
        </Modal>


      </div>
    )
  }
}

export default UpdatePost
