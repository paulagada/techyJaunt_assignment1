const students = [
    { name: "Paul", age: 20, grade: "A" },
    { name: "Tobi", age: 22, grade: "B" },
    { name: "Jefferson", age: 19, grade: "A" },
    { name: "David", age: 21, grade: "C" },
    { name: "Esther", age: 20, grade: "B" },
    { name: "Emmanuel", age: 19, grade: "C" }
];

function filterByGrade(students, grade) {
    var newArray = []
     students.forEach(student => {
        if (student.grade === grade) {
            newArray.push(student);
        }
    });
    return newArray
}

function filterByGrade2(students, grade) {
    return students.filter(student => student.grade === grade);
}

var answer = filterByGrade2(students, "A")
console.log(answer)


// question 2

function averageAge(students) {
    var totalAge = 0;
     students.forEach(student => {
        totalAge += student.age;
    }); 
    return  num/students.length
}


function averageAge2(students) {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

var answer2 = averageAge2(students)
console.log(answer2)

