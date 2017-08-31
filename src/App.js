import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header.js'
import SocialButtons from './components/socialBtn'
import Particle from './components/particles'

import Home from './components/home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <SocialButtons />
          <Particle />
          <Route exact path="/" component={ Home }/>
        </div>

      </Router>
    );
  }
}

export default App;
