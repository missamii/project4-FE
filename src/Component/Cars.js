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
        res: res.data
      });
      console.log(res.data);
    });
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({
      car: event.target.value
    });
  }

  render() {
    const cars = this.state.res
    const i = 0
    console.log(cars)

    return(
      <div className="Cars">
        <input className='input' type='text' value={this.state.car} onChange={(event) => this.handleChange(event)}></input>
        <button onClick={this.searchCar.bind(this)}>Cars</button>

        <ol className="olStyle">
          {cars.map(function (cars, i) {
            return <li className="recStyle" key={i}>{cars.models}

            </li>
          })}
        </ol>

      </div>
    )
  }
}

export default Cars;
