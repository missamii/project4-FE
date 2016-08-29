import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';
import Search from './Search';
// import axios from 'axios'
import '../App.css';


class App extends Component {


//   componentDidMount() {

//     const method = 'post';
//     const url = 'http://localhost:3000/cars';

//     axios({
//       method: method,
//       url: url,
//     }).then(function (response) {
//       console.log(response.data);
//     });


// }



  render() {
    return (
      <div className="App">
        <h1>This page works!</h1>
          <Search />
            {this.props.children}
      </div>
    );
  }
}

export default App;
