const operation = require("./module.js");

console.log(operation.add(4, 10));
console.log(operation.product(6, 10));

// Read from a extranal file
const fs = require("fs");
console.log(typeof fs);
/* Read in the synce way */
console.log("before stating to read");
// const reuslt = fs.readFileSync("input.txt");

/* read in asysnce */
fs.readFile('input.txt',(error,content)=>{
    if(error)
    {
        console.log(error)
    }
    console.log("content of the file is :=" +content)
})

// console.log(reuslt);
console.log("last line");
