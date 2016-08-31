import React, { Component } from  'react';
import Header from './Header.js'
import helpers from '../utils/helpers.js';


class DeletePost extends Component {
  constructor(props) {
    super(props);
  }
    handleDelete(event) {
      console.log(this.props)
      helpers.delete(this.props).then((res) => {
        // this.setState({
      //     response: res.data
      //   });
      // console.log(res.data);
      })
    }

  render() {
    return(
      <div className="DeletePost">

      <button  onClick={(event)=>this.handleDelete(event)}>Delete</button>

      </div>
    )
  }
}

export default DeletePost
