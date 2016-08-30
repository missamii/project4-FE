import React, { Component } from 'react'



class SearchCars extends Component {




  render() {
    this.cars = this.props.data
    console.log('inside searchcars', this.props.data)
    const i = 0
    return (

       <ol className="olStyle">
            {
                this.cars.models.map(function (car, i) {
                  return <li className="recStyle" key={i}> {car.id} </li>
                })
              }

        </ol>
      )
  }
}



        //         {
        //   this.state.res.length
        //   ?
        //   <SearchCars data={this.state.res}/>
        //   :
        //   null
        // }
export default SearchCars
