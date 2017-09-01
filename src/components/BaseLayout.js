import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Link} from 'react-router-dom';
import Home from './Home';
import Automotive from './Automotive';
import Clothing from './Clothing';
import Electronics from './Electronics';
import Kitchen from './Kitchen';
import About from './About';
import Contact from './Contact';

class BaseLayout extends Component {
  render() {
    return(
      <div className="app-wrap">
        <div className="App">
            <nav>
              <ul className="right-nav"> 
                <li className="right"><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li className="right"><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
              </ul>
              <ul className="main-nav">
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/automotive">Automotive</NavLink></li>
                <li><NavLink activeClassName="active" to="/clothing">Clothing</NavLink></li>
                <li><NavLink activeClassName="active" to="/electronics">Electronics</NavLink></li>
                <li><NavLink activeClassName="active" to="/kitchen">Kitchen</NavLink></li>
              </ul>
            </nav>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default BaseLayout