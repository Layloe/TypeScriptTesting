let grade = 'A'
let grade2 = 85
let test_total = 100

let calcPercentage = (studentGrade, test_total) => {
    let percentage = studentGrade/test_total
    return `This student got ${percentage} percent on the test!`
}

console.log(calcPercentage(grade,test_total))

