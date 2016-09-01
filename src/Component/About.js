import React, { Component } from 'react';
import Header from './Header.js';
import { Modal, Button, Profiles } from 'react-bootstrap';
import '../About.css'


class About extends Component {
  constructor(props) {
     super(props)
     this.state = {
       showModalCarrow: false,
       showModalTiffany: false
     }
   }

   openModal(name){
      console.log('clicked:', name)
      if (name === 'carrow') {
            this.setState({
              showModalCarrow: true
            });
        } else if (name === 'tiffany') {
            this.setState({
              showModalTiffany: true
            });
        }
    }

    closeModal(name){
       console.log('close modal clicked')
       if (name === 'carrow') {
             this.setState({
               showModalCarrow: false
             });
         } else if (name === 'tiffany') {
             this.setState({
               showModalTiffany: false
             });
         }
     }


  render() {
    return (
      <div className="About">
        <Header />
          <div className="aboutDiv">
            <h1>About CarFetch</h1>
            <p>
            The CarFetch App out of many, was created for our final project. We wanted to make car shopping easier and more relaxed. This App brings your current and relevant information about the car of your dreams. You can shop different dealerships near you, find a vehicle by the make, model, year or the reviews. Use Reviews to find out what other people are saying about a particular vehicle or the best dealership to shop.
            </p>
            <div className="carrowCard">
              <img src="http://i64.tinypic.com/1z6qovb.jpg" />
              <Modal show={this.state.showModalCarrow} onHide={() => this.closeModal('carrow')}>
                <Modal.Header closeButton>
                  <Modal.Title className='title'>Carrow Thibault</Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                    <p>
                    A WDI (web development immersive) Student at General Assembly. [talk about a few hobbies, what do you like to code in most? any goals?]
                    </p>
                  </Modal.Body>
                    <Modal.Footer>
                      <Button bsStyle='primary' onClick={(name) => this.closeModal('carrow')}>Close</Button>
                    </Modal.Footer>
              </Modal>
          <div className='aboutContainer1'>
              <Button className='button' bsStyle="danger" onClick={() => this.openModal('carrow')}>
                About Carrow
              </Button>
              </div>
          </div>
               <br />  <br /> <br />

          <div className="tiffanyCard">
            <img src="http://i64.tinypic.com/1z6qovb.jpg" />
            <Modal show={this.state.showModalTiffany} onHide={() => this.closeModal('tiffany')}>
                <Modal.Header closeButton>
                  <Modal.Title className='title'>Tiffany Lo</Modal.Title>
                </Modal.Header>
              <Modal.Body>
                <p>
                A WDI (web development immersive) Student at General Assembly. She found her love for design and coding at 12 years old. Stopped by a 7 year haitus from everything she loved. GA has helped rekindle her most beloved passions. Some of her favorite technologies are Wordpress, CSS, Hugo & Ruby.
                </p>
                <p>
                <strike>She is all about code, all day, everyday and does nothing else.</strike> If she's actually not behind a computer, Tiffany enjoys the beach and is also known as <b>beach bum</b>. She loves being out doors and has been called a <u>sun child</u> on many occasions, dispite her battle with <u>Lupus SLE</u>. In the future she'll be applying her talents to open sourced projects to work with Non-profits for the betterment of others. Her dream job is working as Developer at either <a href="rainn.org">RAINN.org</a> or <a href="safehorizon.org">Safe Horizon</a>
                </p>
              </Modal.Body>
            <Modal.Footer>
              <Button bsStyle='primary' onClick={(name) => this.closeModal('tiffany')}>Close</Button>
            </Modal.Footer>
            </Modal>
          <div className='aboutContainer1'>
              <Button className='button' bsStyle="danger" onClick={() => this.openModal('tiffany')}>
                    About Tiffany
                        </Button>
                </div>
            </div>
          </div>
      </div>

    )
  }
}

export default About
