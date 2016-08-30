import React, { Component } from 'react';
// import SearchCars from './SearchCars.js'
import helpers from '../utils/helpers.js';
import { Button } from 'react-bootstrap';
import Header from './Header.js'
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
  searchDealers(e) {
       helpers.getThis(this.state.car)
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
      <Header />

        <input className='input' type='text' placeHolder='make' onChange={this.handleChange.bind(this)}></input>
        <input className='input' type='text' placeHolder='zipcode' onChange={this.handleChange.bind(this)}></input>
        <Button bsStyle="primary" onClick={this.searchDealers.bind(this)}>Dealerships</Button>


      </div>
    )
  }
}

export default Dealerships;
