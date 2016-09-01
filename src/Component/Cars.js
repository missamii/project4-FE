import React, { Component } from 'react';
// import SearchCars from './SearchCars.js'
import helpers from '../utils/helpers.js';
import { Button, Panel, PanelGroup } from 'react-bootstrap';
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
        console.log("this is:", res.data)
        // const cleanData = res.data.introduction.replace(/<\/?[^>]+>/gi, '');
        this.setState({
        // response: res.data.introduction.replace(/<\/?[^>]+>/gi, '')
        response: res.data
      })
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
    console.log("this:", cars);
    const i = 0
    return(
    <div className="Cars">

    <div className="inputboxes">
        <input type="text" onChange={this.handleChange.bind(this)}></input> &nbsp;
        <Button bsStyle="primary" bsSize="small" className="button" onClick={this.searchCar.bind(this)}>Cars</Button>
    </div>
            <br />   <br />   <br />   <br />


          <PanelGroup className="panel" defaultActiveKey="10" accordion>

            <Panel className="panel" header={cars.title ? cars.title : null} eventKey="1">
              {cars.introduction ? cars.introduction.replace(/<\/?[^>]+>/gi, '') : null}
            </Panel>

            <Panel className="panel" header={cars.link ? cars.link.href : null}>
            </Panel>

          </PanelGroup>

             {cars.models ?
              cars.models.map(
          function(cars, i) {
              return <div className="recStyle" key={i}> {cars.name} </div>
            })
              :
              null
            }
    </div>
    )
  }
}

export default Cars;
