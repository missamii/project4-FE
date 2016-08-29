import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';
import '../Header.css';


  class Header extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to='/'>Home</Link>
        <Link to='/SearchCars'>Cars</Link>
        <Link to='/MessageBoard'>Message Board</Link>
        <Link to='/About'>About</Link>

      </div>

    )

  }


}

export default Header;
