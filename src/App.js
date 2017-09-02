import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header.js'
import SocialButtons from './components/socialBtn'
import Particle from './components/particles'
import Photos from './components/photosComponent'

import Home from './components/home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Particle />
          <Route exact path="/" component={ Home }/>
          <Route path="/photos" component={ Photos }/>
          <SocialButtons />
        </div>

      </Router>
    );
  }
}

export default App;
