const name = "asa";
let mark = 70;
console.log(name);
if (mark >= 50) {
    console.log("pass")

} else if (mark >= 80) {
    console.log("you grade is A+");
} else {
    console.log("fail");
}
var marks = [40, 50, 70];
for (let i = 0; i < marks.lenght; i++) {
    console.log(marks[i]);
}

function getResult(mark) {
    if (mark >= 60) {
        return "hello";
    }
    return "fail to ATW"
}
console.log(getResult(75));
console.log(getResult(35));
const student = {
    sname: "alamin",
    sid: "23-52210-2",
    sec: "B",
    markss: 80,
    showClassResult() {
        if (this.markss >= 50) {
            return this.sname + "pass";
        }
        return this.sname + 'fail';
    }
};
console.log(student.sname);
console.log(student["sid"]);
console.log(student.showClassResult());