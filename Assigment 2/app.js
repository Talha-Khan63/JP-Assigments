// let Maths = +prompt("enter your maths Marks")
// let Physics = +prompt("enter your Physics Marks")
// let English = +prompt("enter your English Marks")
// let Chemistry = +prompt("enter your Chemistry Marks")
// let Pst  = +prompt("enter Your PSt Marks")

// let totalMarks = Maths + Physics + English + Chemistry + Pst

// let perc = totalMarks / 500 * 100



// // document.write("Your total MArks is" + " "+ totalMarks + "<br><br><br>")

// // document.write("Your Percentage is" + " "+ perc + "%" + "<br><br><br>")

// if(perc <= 80){
//     Grade = "A+"
// }
// else if(perc <= 70){
//     Grade = "A"

// }
// else if(perc <= 60){
//     Grade = "B"

// }
// else if(perc <= 50){
//     Grade = "C"

// }
// else if(perc <= 40){
//     Grade = "D"

// }
// else if(perc >= 33){
//     Grade = "Failed"
// }

// document.write(`
//         <h1>Mark Sheet </h1>
    
//     `)
// Subject marks (using let for variables that might change later)
let maths = prompt("Enter YOur Numbers");
let physics = prompt("Enter YOur Numbers");
let english = prompt("Enter YOur Numbers");
let chemistry = prompt("Enter YOur Numbers");
let pst = prompt("Enter YOur Numbers");

const totalPossibleMarks = 500;

let totalMarks = maths + physics + english + chemistry + pst;

let percentage = (totalMarks / totalPossibleMarks) * 100;

let grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "F";
}

document.write(`
    <h1>Mark Sheet</h1>
    <p><strong>Maths:</strong> ${maths}</p>
    <p><strong>Physics:</strong> ${physics}</p>
    <p><strong>English:</strong> ${english}</p>
    <p><strong>Chemistry:</strong> ${chemistry}</p>
    <p><strong>PST:</strong> ${pst}</p>
    <hr>
    <p><strong>Total Marks:</strong> ${totalMarks} / ${totalPossibleMarks}</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p>
`);
