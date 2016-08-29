import React, { Component } from 'react';
import { Link } from 'react-router';


class Home extends Component {

  render() {
    return (
    <div>
    <h1>Welcome</h1>
    <Link className="enter" to="/SearchCars"> Enter!</Link>
    </div>
    )
    }
}

export default Home;
