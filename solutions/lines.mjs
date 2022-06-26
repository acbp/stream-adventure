import { Transform } from "stream"

const upper = new Transform({
  toggle:false,
  transform(c,e,n){
    const data = ( this.toggle = !this.toggle ) ? 
          c.toString().toLowerCase() : 
          c.toString().toUpperCase()
    n(null, data)
  }
})

process.stdin
    .pipe(upper)
    .pipe(process.stdout)
