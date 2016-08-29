import React, { Component } from 'react';
import { Link } from 'react-router';
import '../Header.css';


  class Header extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to='/'>Home</Link>
        <Link to='/SearchCars'>Cars</Link>
        <Link to='/NewPost'>New Post</Link>
        <Link to='/About'>About</Link>

      </div>

    )

  }


}

export default Header;
