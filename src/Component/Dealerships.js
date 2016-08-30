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
      zipcode: "",
      response: []
    };
  }
  searchDealers(e) {
       helpers.getThis(this.state.zipcode)
       .then((res) => {
        this.setState({
        response: res.data
      });
      console.log('inside serachcar funcion', this.state.response);

    });
  }

  handleChangeCar(event){
    console.log(event.target.value);
    this.setState({
      car: event.target.value
    });
  }

    handleChangeZip(event){
    console.log(event.target.value);
    this.setState({
      zipcode: event.target.value
    });
  }


  render() {
    const dealerships = this.state.response
    const i = 0
    return(
      <div className="Dealerships">
      <Header />

        <input className='input' type='text' placeholder='make' onChange={this.handleChangeCar.bind(this)}></input>
        <input className='input' type='text' placeholder='zipcode' onChange={this.handleChangeZip.bind(this)}></input>
        <Button bsStyle="primary" onClick={this.searchDealers.bind(this)}>Dealerships</Button>




      </div>
    )
  }
}

export default Dealerships;
