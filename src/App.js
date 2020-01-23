import React, { Component } from 'react';

import Appcenter from './Appcenter'
import Appheader from './Appheader'
import Apptoggle from './Apptoggle'
import data from './data'
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        

      }
  }
  
  render() {
  return (
    <div className="App">
      <Appheader/>
      <Appcenter/>
      <Apptoggle/>
    </div>
  )};
}

export default App;