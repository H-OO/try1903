// export const add = params => (dispatch, getState) => {
//   dispatch({
//     type: 'ADD'
//   })
// }

// export const minus = params => (dispatch, getState) => {
//   dispatch({
//     type: 'MINUS'
//   })
// }

// export const addAsync = params => (dispatch, getState) => {
//   // 模拟异步
//   setTimeout(() => {
//     dispatch({
//       type: 'ADD'
//     })
//   }, 1000)
// }

export function add() {
  return { type: 'ADD' }
}

export function minus() {
  return { type: 'MINUS' }
}

export function addAsync() {
  // 模拟异步
  return (dispatch, getState) => {
    console.log(dispatch)
    console.log(getState)
    setTimeout(() => {
      dispatch(add())
    }, 1000)
  }
}
