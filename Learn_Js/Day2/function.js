// Define Function
function Hello() {
  console.log("Hello");
}
Hello();

// sum of the two numner
function sum(a, b) {
  // funtion =keyword
  //funtion name =sum
  //(a,b )= paramerter

  return a + b;
}
var total = sum(7, 6);
//sum(7,6) arguments

console.log(total);

// Argumests object
function fn() {
  console.log(arguments);
}
fn(5, 3, 2, 1);

// Arrow function
var hello = () => console.log("Arrow function");
hello();

var sum = (a, b) => a + b;
console.log(sum(8, 9));
// funtion with parameter ,multiple times of fn body

var procces = (a, b) => {
  console.log("need to process");
  return a + b;
};
console.log(procces(9, 1));
  // IIFE( immediately invoked function expression)
(function()
{
    console.log("HELLO IIFE")
})();
