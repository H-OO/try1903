import './Counter.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createStore } from 'redux'
import rootReducers from '../../reducers'

class Counter extends Component {
  componentWillMount() {
    // --- thunk
    function createThunkMiddleware(extraArgument) {
      return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument)
        }
        console.log(next)
        return next(action)
      }
    }
    
    const thunk = createThunkMiddleware()
    thunk.withExtraArgument = createThunkMiddleware
    // --- compose
    function compose(...funcs) {
      if (funcs.length === 0) {
        return arg => arg
      }
    
      if (funcs.length === 1) {
        return funcs[0]
      }
    
      return funcs.reduce((a, b) => (...args) => a(b(...args)))
    }
    // --- applyMiddlewares
    function applyMiddleware(...middlewares) {
      // enhancer(createStore)(reducer, preloadedState)
      return createStore => (...args) => {
        console.log(createStore)
        const store = createStore(...args)
        let dispatch = () => {
          throw new Error(
            `Dispatching while constructing your middleware is not allowed. ` +
              `Other middleware would not be applied to this dispatch.`
          )
        }
    
        const middlewareAPI = {
          getState: store.getState,
          dispatch: (...args) => dispatch(...args)
        }
        const chain = middlewares.map(middleware => middleware(middlewareAPI))
        dispatch = compose(...chain)(store.dispatch)
    
        return {
          ...store,
          dispatch
        }
      }
    }

    // ---
    // const m = applyMiddleware(thunk)
    // console.log(m)
    // const c = compose(m)
    // console.log(c)

    console.log(applyMiddleware(thunk))
    const store = createStore(rootReducers, applyMiddleware(thunk))
    console.log(store)

    debugger
  }
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
