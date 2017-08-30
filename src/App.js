import React, { Component } from 'react';
import './App.css';

import Header from './components/header.js'
import SocialButtons from './components/socialBtn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SocialButtons />
      </div>
    );
  }
}

export default App;
