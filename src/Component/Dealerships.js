import React, { Component } from 'react';
// import SearchCars from './SearchCars.js'
import helpers from '../utils/helpers.js';
import { Button, Panel, Accordion } from 'react-bootstrap';
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
       helpers.getThis(this.state.zipcode, this.state.car)
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
        <div className="inputboxes">

          <input className='input' type='text' placeholder='make' onChange={this.handleChangeCar.bind(this)}></input> &nbsp;
          <input className='input' type='text' placeholder='zipcode' onChange={this.handleChangeZip.bind(this)}></input> &nbsp;
          <Button bsStyle="primary" bsSize="small" onClick={this.searchDealers.bind(this)}>Dealerships</Button>
          <br />
        </div>

      <Accordion>
        {dealerships.franchises ?
          dealerships.franchises.map(
            function(dealerships, i) {
              return <div className="dealer" key={i}> <Panel header={dealerships.name} eventKey="1" bsStyle="primary">
            <b>Address:</b> <br />
            {dealerships.address.street}<br />
            {dealerships.address.city} <br /> {dealerships.address.county} <br /> {dealerships.address.zipcode} <br /> {dealerships.address.stateCode} </Panel> <br /> </div>
            })
              :
              null
            }

      </Accordion>
      </div>
    )
  }
}

export default Dealerships;
