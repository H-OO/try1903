import './Counter.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button>+</button>
        <button>-</button>
        <br />
        <button>addAsync</button>
      </div>
    )
  }
}

export default connect()(Counter)
