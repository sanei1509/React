// UTILIDAD:
// REST -> extender los elementos de más pasados
// SPREAD -> hacer una copia exacta de un grupo de elementos
function sumar(a, b, ...others) {
  //   queremos sumar los 2 números principales y todo lo que se me pueda pasar
  let total = 0;
  //   sumo todo los elementos extra que me pasaron
  for (num of others) {
    total += Number(num);
  }
  console.log(total);
  console.log(others);
  return a + b + total;
}

const nums = [2, 2, 2, 2, 2, 5, 10];

console.log(sumar(...nums));
