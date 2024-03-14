// eslint-disable-next-line arrow-body-style
const makeAsync = (time, callback) => {
  return setTimeout(() => {
    const n = Math.random();
    callback(n);
  }, time);
};

const x = 22;
makeAsync(20, (value) => console.log(value * x));
