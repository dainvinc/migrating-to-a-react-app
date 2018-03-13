import React, { Component } from 'react';
import './App.css';
import AboutMe from './AboutMe.js';
import myDetails from './apis/json/aboutMe.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutMe details={myDetails} />
      </div>
    );
  }
}

export default App;
