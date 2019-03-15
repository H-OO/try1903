import React, { Component } from 'react'
import Context from '../../context/context'
const { Consumer } = Context
// class C extends Component {
//   constructor(props, context) {
//     super(props, context)
//     console.log(props, context)
//   }
//   render() {
//     return (
//       <Consumer>
//         {context => {
//           console.log(context)
//           return (<div>C</div>)
//         }}
//       </Consumer>

//     )
//   }
// }
const C = () => {
  return (
    <Consumer>
      {context => {
        console.log(context)
        return <div>C</div>
      }}
    </Consumer>
  )
}
export default C
