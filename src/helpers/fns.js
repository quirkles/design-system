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

export const toMirror = (list) => list.reduce((acc, val) => {
  acc[val] = val;
  return acc;
}, {});

export const getMiddle = (array) => {
  const index = Math.floor(array.length / 2);
  const val = array[index];
  return [val, index];
};

export const getNextEl = (el, array) => {
  const index = array.indexOf(el);
  return array[index + 1];
};

export const memoize = (fn) => (...args) => {
  const results = {};
  const argKey = args.join(',');
  if (results[argKey]) {
    return results[argKey];
  }
  const result = fn(...args);
  results[argKey] = result;
  return result;
};
