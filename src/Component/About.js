import React, { Component } from 'react';
import Header from './Header.js';

class About extends Component {

  render() {
    return (
      <div>
        <Header />
        <h1>About [Name of App here]</h1>
        {/* started on the about page, will need to add pictures of creators, and so */}
          <p>
            This App out of many, was created for our final project. We wanted to make car shopping easier and more relaxed. This App brings your current and relevant information about the car of your dreams. You can shop different dealerships near you, find a vehicle by the make, model, year or the reviews. Use Reviews to find out what other people are saying about a particular vehicle or the best dealership to shop.
          </p>

        <h3>Carrow Thibault</h3>
          <p>
            A WDI (web development immersive) Student at General Assembly. [talk about a few hobbies, what do you like to code in most? any goals?]
          </p>

        <h3>Tiffany Lo</h3>
          <p>
            A WDI (web development immersive) Student at General Assembly. She found her love for design and coding at 12 years old. Stopped by a 7 year haitus from everything she loved. GA has helped rekindle her most beloved passions. Some of her favorite technologies are Wordpress, CSS, Hugo & Ruby.
          </p>
          <p>
            <strike>She is all about code, all day, everyday and does nothing else.</strike> If she's actually not behind a computer, Tiffany enjoys the beach and is also known as <b>beach bum</b>. She loves being out doors and has been called a <u>sun child</u> on many occasions, dispite her battle with <u>Lupus SLE</u>. In the future she'll be applying her talents to open sourced projects to work with Non-profits for the betterment of others. Her dream job is working as Developer at either <a href="rainn.org">RAINN.org</a> or <a href="safehorizon.org">Safe Horizon</a>

          </p>
      </div>
      )
  }
}

export default About
