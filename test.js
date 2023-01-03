// não está me retornando o valor que preciso
const myArray = [1, 2, 3, 4, 5];

const index = myArray.indexOf(2);
if (index !== -1) {
  console.log('O índice existe no array');
  console.log(index);
} else {
  console.log('O índice não existe no array');
}
// Esse código verifica de maneira correta se o indice existe
const indexNumber = "4";
if (myArray[indexNumber] !== undefined) {
  console.log('O índice existe no array');
} else {
  console.log('O índice não existe no array');
}
