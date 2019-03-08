// async function a() {
//   console.log('a start')
//   await b() // resolve(b())
//   console.log('a end')
// }
// async function b() {
//   console.log('b start & end')
//   // console.log('b start')
//   // await ''
//   // console.log('b end')
// }

// a()

// new Promise((resolve) => {
//   console.log('promise start')
//   resolve()
// }).then(() => {
//   console.log('promise end')
// })

// --- node
// a start
// b start & end
// promise start
// a end
// promise end

// --- brower
// a start
// b start & end
// promise start
// promise end
// a end

function a() {
  return new Promise(resolve => {
    console.log('a start') // 1
    resolve(b())
  })
    .then(() => {
      console.log('a end') // ???
    })
}

function b() {
  return new Promise(resolve => {
    console.log('b start') // 2
    resolve()
  })
}

a()

new Promise(resolve => {
  console.log('promise start') // 3
  resolve()
})
  .then(() => {
    console.log('promise end') // ???
  })

// node

// --- node
// a start
// b start
// a end
// promise

// --- brower
// a start
// b start
// promise
// a end
