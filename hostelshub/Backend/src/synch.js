// const teachers = () => {
//     setTimeout(() => {
//         console.log("After 2 ms. i m teachers function.")
//     }, 2000)
// }

// const students = () => {
//     console.log("i m students function.");
// }

// teachers();
// students();

getCourses("SP19-BSE-000", (studentInfo) => {
    getCreditHours(studentInfo.course, (creditHours) => {
        console.log(creditHours);
    })
});

function getCourses(id, callback){
    setTimeout(() => {
        callback({student_id: id, course: "Web"});
    }, 2000)
}

function getCreditHours(courses, callback) {
    const hours = 3;
    setTimeout(() => {
        callback("credit hours" + hours);
    }, 2000)
}  











