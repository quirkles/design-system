export const pipe = (...fns) =>
  (val) =>
    fns.reduce((curr, fn) => fn(curr), val);

export const flip = (fn) => (arg1, arg2) => fn(arg2, arg1);

export const curry = (f) => {
  return function currify(...args) {
    return args.length >= f.length ? f(...args) : currify.bind(null, ...args);
  };
};


export const keyMirror = (obj) => {
  const returnObject = {};
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      returnObject[key] = key;
    }
  }
  return returnObject;
};
