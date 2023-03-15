"use strict";
// 1 - Create a Program to Calculate Student Grades
let englishMarks = 90;
let urduMarks = 40;
let grade;
let average = (englishMarks + urduMarks) / 2;
if (average >= 80) {
    grade = 'A';
}
else if (average >= 70) {
    grade = 'B';
}
else if (average >= 60) {
    grade = 'C';
}
else if (average >= 50) {
    grade = 'D';
}
else if (average >= 40) {
    grade = 'E';
}
else {
    grade = 'F';
}
console.log(grade);
