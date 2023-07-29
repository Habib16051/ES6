let array = [1, 2, 3, 4, 5, 6];

let array1 = array.filter(myFun);

function myFun(x) {
  return x % 2 === 0;
}
console.log(array1);

// filter can depends on the condition
