import { Transform } from "stream"

const upperCase = new Transform({
  transform(c,e,n){
    const mutated = c.toString().toUpperCase()
    const error = null
    n(error, mutated)
  }
})

process.stdin.pipe(upperCase).pipe(process.stdout)
