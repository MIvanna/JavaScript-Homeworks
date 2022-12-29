let numberOfExams = 5;
let grades = [10, 6, 8, 9, 6]

function hasStudentPassed(arrayOfGrades, numberOfExams ){

    let sum = 0;

    for (let i = 0; i < grades.length; i++){
        sum +=  grades[i]
    }
    console.log(sum)

    let average = sum / numberOfExams

if (average > 8){
    alert("You have passed the exam!")
} else if (average < 8){
    alert("You have not passed!")
}
}
hasStudentPassed(grades, numberOfExams);