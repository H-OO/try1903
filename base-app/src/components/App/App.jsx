import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'

class App extends Component {
  handler() {
    console.log('handler')
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    console.log('render')
    return (
      <div className="App">
      </div>
    )
  }
}

export default App
