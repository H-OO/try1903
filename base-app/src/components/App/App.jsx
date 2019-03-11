import React, { Component } from 'react'
import './App.css'

import T from '../T/T'

class App extends Component {
  render() {
    console.log(<T />)
    return (
      <div className="App">
        <T style={{backgroundColor:'red',color:'white',fontSize:40}}>
          <div>abc</div>
        </T>
      </div>
    )
  }
}

export default App
