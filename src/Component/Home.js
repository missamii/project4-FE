import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';
import '../Home.css'


class Home extends Component {

  render() {
    return (
      <div className="wrapper">
        <Jumbotron>
          <h1>Welcome [APP NAME]</h1>
          <p>
            <iframe className="iframe" id="ytplayer" type="text/html" width="640" height="390"
        src="https://www.youtube.com/embed/wT-4nESh-4Y?autoplay=1"
        frameBorder="0"></iframe>
          </p>
          <p>
            <Button bsStyle="danger" bsSize="large" className="enter" href="/SearchCars">&nbsp; &nbsp; &nbsp; Enter  &nbsp; &nbsp; &nbsp;</Button>
          </p>
        </Jumbotron>
    </div>


    )
  }
}

export default Home;
