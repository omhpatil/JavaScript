const Course = {
    CourseName: "JS in hindi",
    price: 999,
    CourseInstructor: "Om"
}

console.log(Course.CourseInstructor);

const {CourseInstructor} = Course
console.log(CourseInstructor);

const {CourseInstructor: CourseI} = Course
console.log(CourseI);
