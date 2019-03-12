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

// console.log('script start')
// a()

// new Promise(resolve => {
//   console.log('promise start')
//   resolve()
// }).then(() => {
//   console.log('promise end')
// })

// console.log('script end')

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

// ---------
// function a() {
//   return new Promise(resolve => {
//     console.log('a start')
//     resolve(b())
//   })
//     .then(() => {
//       console.log('a end')
//     })
// }

// function b() {
//   return new Promise(resolve => {
//     console.log('b start & end')
//     resolve()
//   })
//     // .then(() => {
//     //   console.log('b end')
//     // })
// }

// console.log('script start')
// a()

// new Promise(resolve => {
//   console.log('promise start')
//   resolve()
// })
//   .then(() => {
//     console.log('promise end')
//   })

// console.log('script end')

// var a = {}
// a.a = a

// console.log(a === a.a)

// console.log(a)

let str = `

{{if key<=0&&item.example&&item.example.length>0}}
    <div class="container" >
    <h5 class="area2_tite">{{item.title}}</h5>
    <div class="area2_content">
{{/if}}
{{if item.example&&item.example.length>0}}           
{{each item.example}}
<div class="area2_content_item">
    <a href="{{$value.id | redirectPath:list.id,'example'}}">
        <img src="{{$value.pic}}" alt="">
        <p>{{$value.title | subStringLenth}}</p>
    </a>
</div>
{{/each}} 
{{/if}}
  {{if key<=0&&item.example&&item.example.length>0}}
      </div>
      </div>
  {{/if}}

`

console.log('未处理前：')
console.log(str)
console.log('--------------')
str = str.trim()
console.log('去前后不可见字符：')
console.log(str)
console.log('--------------')
let lines = str.match(/\n\s*/g)
console.log(lines)
console.log('统计行数：' + (lines.length + 1)) // 由于前后去不可见字符 实际行数需+1
console.log('--------------')
console.log('压缩后：')
let compress = str.replace(/\n\s*/g, '')
console.log(compress)
