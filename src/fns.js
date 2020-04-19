export const pipe = (...fns) => val => fns.reduce((curr, fn) => fn(curr), val)

export const flip = fn => (arg1, arg2) => fn(arg2, arg1)

export const curry = (f) => {
  return function currify(...args) {
    return args.length >= f.length ?
      f.apply(null, args) :
      currify.bind(null, ...args)
  }
}
