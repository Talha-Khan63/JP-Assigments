// let num1 = 15;

// let num2 = num1

// num2 = 100
// console.log(num1);
// console.log(num2);


// let name1 = "Muhamad"
// let name2 = name1


// name1  = "Talha"
// console.log(name1);
// console.log(name2);


// let arr = [1,2,3,4,5]
// let arr2 = [...arr]

// arr2.push(100)

// console.log(arr)
// console.log(arr2)




// let obj = {
//   name : 'Talha',
//   age : 19,
//   city : "kara"

// }
// let obj2 = {...obj}

// obj2.gender = "male"

// console.log(obj);
// console.log(obj2);


let obj1 = {
  name : 'Talha',
  age : 19,
  city : "kara",
  education : {
    class : "2nd Year ",
  }
}
let obj2 = {...obj1, education : {...obj1.education}}

obj2.education.class = "10th  "

console.log(obj1);
console.log(obj2);

