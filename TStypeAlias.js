"use strict";
let student_info = (info) => {
    let enrolled = info.is_enrolled ? "" : "not";
    return `${info.first_name} ${info.last_name} is ${enrolled} enrolled.`;
};
console.log(student_info({
    first_name: 'Mary',
    last_name: 'LittleLamb',
    is_enrolled: true
}));
