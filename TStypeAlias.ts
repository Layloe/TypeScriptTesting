type Student = {
    student_id?:number,
    first_name:string,
    last_name:string,
    middle_name?:string,
    is_enrolled: boolean
}

type StudentGPA = {
    GPA_value: number
}

type StudentWithGPA = Student & StudentGPA

let student_info = (info:Student, school:string = 'West High School') :string => {
    let enrolled = info.is_enrolled ? "" : "not"
    return `${info.first_name} ${info.last_name} is ${enrolled} enrolled at ${school}.`
}

console.log(student_info({
    
    first_name: 'Mary',
    last_name: 'LittleLamb',
    is_enrolled: true

}, 'East High School'))

