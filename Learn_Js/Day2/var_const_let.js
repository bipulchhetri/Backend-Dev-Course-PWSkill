/* var
1.It is used to define variaable
2. It has funtion scope but no block socpe
3. it Is hoisted
*/

// function f1() {
//   var i = 5;
//   console.log(i);
// }
// f1();
// console.log(i);

// hoisted
// console.log(a);
// var a = 50;

/* Let
1. No hosting
2. It also block scope
*/
//  console.log(blur)
//  let blur=10;

{
  var a = 5;
}
console.log(a);

/* const
1.Scope is exactly same as let
2.Const variable are final ,can't be reaassign a value
 */
const country = "INDIA";
country = "Nepal";
