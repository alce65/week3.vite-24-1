/* eslint-disable arrow-body-style */
export const makeAsync = (time, data = null) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n > 0.5) {
        resolve({
          value: n,
          previous: data,
        });
      } else {
        reject(new Error(`Error ${n}`));
      }
    }, time);
  });
};

makeAsync(1000)
  .then((data) => {
    console.log(data);
    return makeAsync(1000, data);
  })
  .then((data) => console.log('Segunda promesa', data))
  .catch((error) => console.log(error.message))
  .finally((_) => console.log('Proceso finalizado'));
