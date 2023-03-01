let numgrades:number[] = []
let lettergrades:string[] = []

numgrades = [1,2,3,4,]

lettergrades = ['a','b', 'c']

// let student_grade:(string | number) = 85

let myArray:(number | boolean | string)[] = [1,2,3,true]


type Test = {
    name: string,
    total_score:number
}

let allTests: Test[] = []

allTests.push({
    name: 'Boi101',
    total_score: 100
})