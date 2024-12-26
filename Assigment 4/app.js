const arrays = [
    42,
    true,
    "hello World",
    {
        name : "john",
        age : 25,
        isstudent : false,
    },
    false,
    3.14,
    "Javascript is Fun",
];
// Q1

let arr = arrays.map((e,i)=>{
   return e.toString()
})
console.log(arr);

// Q2 


// let a = arrays.filter(e=>
//    typeof e === "number"
// )
// console.log(a);

// Q 3

// arrays.forEach((e,i)=>{
//     console.log(typeof e);
    
// })

// Q 4

// let sum = arrays.filter(e => typeof e === "number")
// .reduce((a , b) =>{
//     return a + b
// })

//     console.log(sum);
    
// Q 5

// let arr = arrays.find(e =>
//      typeof e === "boolean")
// console.log(arr);

// Q 6

// let arr = arrays.findIndex(e =>
//      e.name === "john"
// )
// console.log(arr);

    
// Q 7


// let arr = arrays.some(e => typeof e == "number")

//     console.log(arr);

// Q 8

// let arr = arrays.every((e,i)=>{
//     return typeof e == "string"
// })
// console.log(arr);
