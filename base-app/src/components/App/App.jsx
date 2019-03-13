import React, { Component } from 'react'
import './App.css'

import T from '../T/T'

class App extends Component {
  constructor() {
    super()
    this.state = {
      num: 0
    }
    this.handler = this.handler.bind(this)
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

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
        <T style={{backgroundColor:'red',color:'white',fontSize:40}}>
          <div>abc</div>
        </T>
        <button onClick={this.handler}>change state</button>
      </div>
    )
  }
}

export default App
