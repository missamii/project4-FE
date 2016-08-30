import React, { Component } from 'react'
import helpers from '../utils/helpers.js'

class MessageBoard extends Component {

    viewAllClick(e) {
       helpers.getAll()
       .then((res) => {
        this.setState({
        response: res.data
      });
      console.log(res.data);
    });
  }

    render() {
    const post = this.state.response;
    const index = 0;
     return (
      <div className="main">
      <Header />

        <h2>MessageBoard</h2>

           componentDidMount() {


          <ol className="olStyle">
          {post.map(function (post, index) {
            return <li className="recStyle" key={index}>{post.name}<br></br> {post.email} <br></br> {post.message}

            </li>
          })}
        </ol>
      }
        </div>
    );
  }
}

export default MessageBoard
