let student = "Md AL Amin";
let marks = [50, 59, 90, 77, 85, 80];

const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

if (average >= 80 && average <= 100) {
    console.log(student, "Highest mark A+");
} else if (average >= 60 && average <= 79) {
    console.log(student, "lowest Pass Mark B");
} else {
    console.log(student, "Need improvement F ");
}
findHigestMark(marks) {
    if ()
}