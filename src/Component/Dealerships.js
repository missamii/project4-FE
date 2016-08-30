import React, { Component } from 'react';
// import SearchCars from './SearchCars.js'
import helpers from '../utils/helpers.js';
import { Button } from 'react-bootstrap';
import '../Cars.css'


class Dealerships extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      car: "",
      response: []
    };
  }
  searchCar(e) {
       helpers.getOne(this.state.car)
       .then((res) => {
        this.setState({
        response: res.data
      });
      console.log('inside serachcar funcion', this.state.response);

    });
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({
      car: event.target.value
    });
  }

  render() {
    const cars = this.state.response
    console.log("this:", cars)
    const i = 0
    return(
      <div className="Dealerships">

        <Button bsStyle="primary" onClick={this.searchCar.bind(this)}>Cars</Button>
        <input className='input' type='text' onChange={this.handleChange.bind(this)}></input>

      </div>
    )
  }
}

export default Dealerships;
