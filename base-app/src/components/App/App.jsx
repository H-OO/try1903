import './App.css'
import React, { Component } from 'react'
import P from '../P/P'

import Context from '../../context/context'
const { Provider } = Context

class App extends Component {
  render() {
    return (
      <Provider value={{ msg: '123' }}>
        <div className="App">
          <P />
        </div>
      </Provider>
    )
  }
}

export default App
