function sum(...args) {
  return args.reduce((total , value , index , sum)=> total + value)
}

export {sum};