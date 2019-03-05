function compose(...funcs) {
  console.log(funcs)
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

const a = () => {}
const b = () => {}
const c = () => {}

const res = compose(a(), b(), c())
console.log(res)