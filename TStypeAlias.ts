type Student = {
    student_id?:number,
    first_name:string,
    last_name:string,
    middle_name?:string,
    is_enrolled: boolean
}

let student_info = (info:Student) :string => {
    let enrolled = info.is_enrolled ? "" : "not"
    return `${info.first_name} ${info.last_name} is ${enrolled} enrolled.`
}

console.log(student_info({
    
    first_name: 'Mary',
    last_name: 'LittleLamb',
    is_enrolled: true
}))

