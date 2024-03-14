const wait = (limit) => {
  let i = 0;
  while (i < limit) {
    i++;
  }
};

console.log('Inicio');
wait(100_000_000_000_000);
console.log('Por fin');
