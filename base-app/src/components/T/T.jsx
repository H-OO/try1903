import React, { Component } from 'react'

class T extends Component {
  constructor() {
    super()
    this.state = {
      t: '123'
    }
  }
  componentWillMount() {
    console.log('componentWillMount 1')
    function A() {}
    console.dir(A)
  }
  componentDidMount() {
    console.log('componentDidMount 2')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps 3')
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate 4')
    return true
  }


  componentWillUpdate() {
    console.log('componentWillUpdate 5')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate 6')
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount 7')
  }

  render() {
    console.log(this)
    return (
      <div>is T Component Content</div>
    )
  }
}

// const T = props => {
//   console.log(props)
//   return (
//     <div style={props.style}>{props.children}</div>
//   )
// }

export default T
