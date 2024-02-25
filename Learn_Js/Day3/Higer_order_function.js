function operation(operatorfun, a, b) {
  return operatorfun(a, b);
}
function fn(a, b) {
  return a + b;
}
let result = operation(fn, 5, 6);
console.log(result);
// when you add parameter as a funtion and return function is called higer order function

function greet() {
  return function () {
    console.log("Hello Bipul");
  };
}
let greetfun = greet();
console.log(greetfun);
greetfun();

/* foreach method */
player = ["sachi", "dhoni", "Rohit"];
player.forEach((player) => console.log(player));

// Map
arr = [1, 2, 3, 5, 6];
cube_arr = arr.map((num) => num * 3);
console.log(cube_arr);

// filter
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_arr = arr1.filter((num) => num % 2 == 0);
console.log("even number are =", even_arr) ;

// Reduce 
arr2=[1,2,3,5,6,7,8,9,10]
let sum=arr2.reduce((curr,next)=>curr+next)
console.log(sum)