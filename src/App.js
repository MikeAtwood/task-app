import './App.css';
import React, { Component } from 'react'
import Overview from './components/Overview'
import Superhero from './components/Superhero'

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Overview />
        <Superhero />
      </div>
    );
  }
}

export default App;
