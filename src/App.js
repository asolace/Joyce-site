import React, { Component } from 'react';
import './App.css';

import Header from './components/header.js'
import SocialButtons from './components/socialBtn'
import Particle from './components/particles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SocialButtons />
        <Particle />
      </div>
    );
  }
}

export default App;
