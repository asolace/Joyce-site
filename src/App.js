import React, { Component } from 'react';
import './App.css';

import Header from './components/header.js'
import SocialButtons from './components/socialBtn'
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SocialButtons />
          <Particles style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }}
          params={{
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              line_linked: {
                enable: false,
                distance: 50,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                polygon: {
                  nb_sides: 7
                }
              }
             },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 200,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "repulse": {
                    "distance": 100,
                    "duration": 0.4
                  }
                }
              },
              "retina_detect": true
          }} />
      </div>
    );
  }
}

export default App;
