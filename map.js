// let array = [1, 2, 3, 4, 5, 6];
// let array2 = [];

// array.forEach(Myfun);
// function Myfun(x) {
//   array2.push(x * 2);
// }
// console.log(array);
// console.log(array2);

let array1 = [2, 4, 6, 10];
let array2 = array1.map(myFun);

function myFun(x) {
  return x * 2;
}

console.log(array1);
console.log(array2);
