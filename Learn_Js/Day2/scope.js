// Global Scope
// var name = "Bipul";
// console.log(name);
// function fn() {
//   console.log(name);
// }
// fn();

// funtion scope
function fun()
{
    var name="chhetri";
    console.log(name)
}
fun();
// console.log(name);

// Block Scope
{
    let x=20;
    console.log(x)
}
console.log(x)