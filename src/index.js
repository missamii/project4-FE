import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './Component/App';
// import Search from './Component/Search.js'
import Home from './Component/Home.js'
import About from './Component/About.js'
import NewPost from './Component/NewPost.js'
import './index.css';

ReactDOM.render(
  (
  <Router history={browserHistory}>
  <Route path="/" component={Home} />
  <Route path="/SearchCars" component={App} />
  <Route path="/About" component={About} />
  <Route path="/NewPost" component={NewPost} />


  </Router>
 ),
 document.getElementById('root')
)
