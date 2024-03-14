const makeAsync = async () => {
  const n = Math.random();
  if (n < 0.5) {
    throw new Error(`Error ${n}`);
  }

  return { value: n };
};

makeAsync()
  .then((data) => {
    console.log(data);
    return makeAsync();
  })
  .then((data) => console.log('Segunda promesa', data))
  .catch((error) => console.log(error.message))
  .finally((_) => console.log('Proceso finalizado'));
