// VAR example
// reinitialize (y)
// reassign (y)
// hoisting (y)
// blockscope (n)

var a = "Nimer"; 
var abc;            
var a = "Hussain";    
console.log(a);     // Output: Hussain

var a = "Nimer"; 

// Function scope with var keyword
function abc() {
  var a = "Nimer";  
  console.log(a);   // Output: Nimer
}
abc();

// LET example
// reinitialize (n)
// reassign (y)
// hoisting (n)
// blockscope (y)

let b = "Ali";      
b = "Ahmed";       
console.log(b);     // Output: Ahmed

if (true) {
  let b = "Asim";   
  console.log(b);   // Output: Asim
}
console.log(b);     // Output: Ahmed

// CONST example
// reinitialize (n)
// reassign (n)
// hoisting (n)
// blockscope (y)

const c = "Umer";   
console.log(c);     // Output: Umer


// c = "Usman";          Error: Assignment to constant variable
// const c = "Umar";     Error: Identifier 'c' has already been declared

if (true) {
  const c = "Hassan"; 
  console.log(c);     // Output: Hassan
}
console.log(c);       // Output: Umer
