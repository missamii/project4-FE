import React, { Component } from 'react';
import helpers from '../utils/helpers.js';
// import axios from 'axios';

class Cars extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      car: "",
      res: []
    };
  }
  searchCar(e) {
       helpers.getOne(this.state.car)
       .then((res) => {
        this.setState({
        res: res
      });
      console.log(res);
    });
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({
      car: event.target.value
    });
  }

  render() {
    return(
      <div className="Cars">
        <input className='input' type='text' value={this.state.car} onChange={(event) => this.handleChange(event)}></input>
        <button onClick={this.searchCar.bind(this)}>Cars</button>

      </div>
    )
  }
}

export default Cars;
