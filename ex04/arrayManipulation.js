const names = "Sharath:12,23,43,45;Gopi:12,23,43,45;Jacob:12,23,43,45;George:12,23,43,45;Krish:12,23,43,45";
marks = names.split(';');
function std1(){
for (stdnt of marks) {
    const studentName = stdnt.split(':')[0];
    const studentMarks = stdnt.split(':')[1];
    console.log(studentName, studentMarks);
}};
function std2(){
for (stdnt of marks) {
    const studentName = stdnt.split(':')[0];
    const studentMarks = stdnt.split(':')[1].split(',');
    console.log(studentName, studentMarks);
}};
console.log("Names and Marks: ");
std1();
console.log("Names and Marks in array: ");
std2();