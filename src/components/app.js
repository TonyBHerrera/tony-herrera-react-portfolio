import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
import About from './pages/about'
import Home from './pages/home'

export default class App extends Component {
  render() {
    return (
      <div className='app'>


        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-me" component={About} />
            </Switch>
          </div>
        </Router>


        <h1>Tony Herrera's Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
