import React, { Component } from 'react'
import helpers from '../utils/helpers.js'
import Header from './Header.js';
class MessageBoard extends Component {

  //   viewAllClick(e) {
  //      helpers.getAll()
  //      .then((res) => {
  //       this.setState({
  //       response: res.data
  //     });
  //     console.log(res.data);
  //   });
  // }

    render() {
    // const post = this.state.response;
    // const index = 0;
     return (
      <div className="main">
        <Header />
      </div>
    );
  }
}

export default MessageBoard
