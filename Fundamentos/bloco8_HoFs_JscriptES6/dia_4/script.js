const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
function flatten(arr) {
  const reduzir = arr.reduce((acc, curr) => {
      curr.forEach(element => {
          acc.push(element)
      });
      return acc;
  }, [])
  return reduzir;
}

console.log(flatten(arrays))