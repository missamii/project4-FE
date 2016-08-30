import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router';
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
          <Button bsStyle="info" bsSize="large" className="enter" href="/SearchCars">Enter</Button>
      </div>
    </div>


    )
  }
}

export default Home;
