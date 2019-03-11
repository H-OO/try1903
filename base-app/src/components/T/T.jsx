import React, { Component } from 'react'

// class T extends Component {
//   // constructor(props) {
//   //   super(props)
//   // }
//   render() {
//     console.log(this)
//     return (
//       <div>is T Component Content</div>
//     )
//   }
// }

const T = props => {
  console.log(props)
  return (
    <div style={props.style}>{props.children}</div>
  )
}

export default T
