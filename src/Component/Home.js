import React, { Component } from 'react';
import { Link } from 'react-router';
import '../Home.css'


class Home extends Component {

  render() {
    return (
    <div>
      <h1>Welcome</h1>

      <div>
      <iframe className="iframe" id="ytplayer" type="text/html" width="640" height="390"
  src="https://www.youtube.com/embed/wT-4nESh-4Y?autoplay=1"
  frameBorder="0"></iframe>
      </div>

      <div>
      <Link className="enter" to="/SearchCars"> Enter!</Link>
      </div>
    </div>


    )
  }
}

export default Home;
