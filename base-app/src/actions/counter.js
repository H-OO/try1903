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
