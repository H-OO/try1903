function compose(...funcs) {
  return funcs.reduce((x, y) => (...args) => x(y(...args))) // 核心代码
}

const a = (args) => {return args}
const b = (args) => {return args}
const c = (args = 'c') => {return args}

const res = compose(a, b, c)
console.log(res) // (...args) => x(y(...args))
console.log(res('xxx')) // xxx