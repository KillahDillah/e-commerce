import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/index.css';
import BaseLayout from './BaseLayout';
import Home from './Home';
import Automotive from './Automotive';
import Clothing from './Clothing';
import Electronics from './Electronics';
import Kitchen from './Kitchen';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/automotive" component={Automotive} />
            <Route path="/clothing" component={Clothing} />
            <Route path="/electronics" component={Electronics} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BaseLayout>
      </Router>
    );
  }
}

export default App;
