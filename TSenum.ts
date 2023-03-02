enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

function isSummer(month:Month) {
    let isSummer: boolean
    let monthName: string = typeof month == 'string' ? month : Month[month]
    switch(month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true
        break;
        default:
         isSummer = false    
    }
    return `${monthName} is ${isSummer}!`
}

console.log(isSummer(Month.Jun))