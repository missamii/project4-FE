import React, { Component } from 'react';
// import SearchCars from './SearchCars.js'
import helpers from '../utils/helpers.js';


class Cars extends Component {
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
      console.log('inside serachcar funcion', this.state.res);

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
      <div className="Cars">

        <button onClick={this.searchCar.bind(this)}>Cars</button>
        <input className='input' type='text' onChange={this.handleChange.bind(this)}></input>


          <ol>
             {cars.models ?
              cars.models.map(
          function(car, i) {
              return (<li className="recStyle" key={i}> {car.id} </li>)
            })
              :
              null
            }
          </ol>
      </div>
    )
  }
}

export default Cars;
