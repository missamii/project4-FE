import React, { Component } from 'react'
import helpers from '../utils/helpers.js'
import Header from './Header.js';
import { Button } from 'react-bootstrap';
import DeletePost from './DeletePost.js'
import UpdatePost from './UpdatePost.js'
import '../MessageBoard.css'


class MessageBoard extends Component {
    constructor(props){
    super(props);
    console.log(props);
    this.state = {
      response: []
    };
  }

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
        <Button className="viewAllClick" bsStyle="primary" onClick={this.viewAllClick.bind(this)}>All Posts</Button>

          <ol className="postStyle">
          {post.map(function (post, index) {
            return <li className="messageStyle" key={index}>{post.name}<br></br> {post.email} <br></br> {post.message}
              <br></br>

              <DeletePost className="DeletePost" post={post} />
              <UpdatePost className="UpdatePost" />


            </li>

          })}

        </ol>



      </div>
    );
  }
}

export default MessageBoard
