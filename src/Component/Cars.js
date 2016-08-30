import React, { Component } from 'react';
// import SearchCars from './SearchCars.js'
import helpers from '../utils/helpers.js';
import { Button } from 'react-bootstrap';
import '../Cars.css'


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
        // const cleanData = res.data.introduction.replace(/<\/?[^>]+>/gi, '');
        this.setState({
        // response: res.data.introduction.replace(/<\/?[^>]+>/gi, '')
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

        <input className='input' type='text' onChange={this.handleChange.bind(this)}></input>
        <Button bsStyle="primary" onClick={this.searchCar.bind(this)}>Cars</Button>



          <div>
            <p>{cars.title ? cars.title : null}</p>
          </div>
          <div>
            <p>{cars.introduction ? cars.introduction.replace(/<\/?[^>]+>/gi, '') : null}</p>
          </div>
          <div>
            <p>{cars.link ? cars.link.href : null}</p>
          </div>

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
