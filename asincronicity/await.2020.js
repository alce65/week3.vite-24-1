/* eslint-disable arrow-body-style */
export const makeAsync = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n > 0.5) {
        resolve({
          value: n,
        });
      } else {
        reject(new Error(`Error ${n}`));
      }
    }, time);
  });
};

// IIFE

try {
  let data = await makeAsync(1000);
  console.log(data);
  data = await makeAsync(1000);
  console.log('Segunda promesa', data);
} catch (error) {
  console.log(error.message);
}

console.log('Proceso finalizado');
