let grade:string = '85'
let grade2:number = 85
let test_total:number = 100


grade2 = 85
test_total = 100

let calcPercentage = (studentGrade:number, test_total:number) : string => {
    let percentage = studentGrade/test_total
    return `This student got ${percentage} percent on the test!`
}

console.log(calcPercentage(grade2,test_total))

export{}