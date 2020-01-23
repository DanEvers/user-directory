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
        id: 1
      }
    }
  
  goBack = () => {
      this.setState({id: this.state.id-1})
    }

  goNext = () => {
    this.setState({id: this.state.id+1})
    }

  render() {
  return (
    <div className="App">
        <Appheader/>
        <Appcenter user={data.find((user) => {
          return user.id === this.state.id
        })} />
        <Apptoggle goBack={this.goBack} goNext={this.goNext}/>
    </div>
  )};
}

export default App;