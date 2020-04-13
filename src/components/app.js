import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/contact'
import Blog from './pages/blog'
import PortfolioDetail from './portfolio/portfolioDetail'
import NoMatch from './pages/no-match'

export default class App extends Component {

  render() {

    return (
      <div className='container'>


        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>




      </div>
    );
  }
}

