// import { Readable, Writable } from "stream"
// 
// const writable = new Writable({
//     write(c,e,n) {
//         n(null,`writing: ${c.toString()}`)
//     }
// })
// 
// const readable = new Readable({read(s){}});
// readable.on('data', c => {
// })
// readable.push( process.argv[2] )
// readable.pipe(process.stdout)
import { Writable } from 'stream'

const stream = new Writable({
  write (chunk, encoding, callback) {
    console.log(`writing: ${chunk.toString()}`)
    callback()
  }
})

process.stdin.pipe(stream)
