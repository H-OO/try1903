import React, { Component } from 'react'

import './Counter.scss'

import store from '../../store'

import { add, minus, addAsync } from '../../actions/counter'

const { dispatch, getState, subscribe } = store

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      num: getState().counter
    }
  }
  componentWillMount() {
    subscribe(() => {
      console.log(getState())
      this.setState({
        num: getState().counter
      })
    })
  }
  add() {
    dispatch(add())
  }
  minus() {
    dispatch(minus())
  }
  addAsync() {
    dispatch(addAsync())
  }
  render() {
    const { num } = this.state
    return (
      <div className="counter">
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        <br />
        <button onClick={this.addAsync}>addAsync</button>
        <div>{num}</div>
      </div>
    )
  }
}
