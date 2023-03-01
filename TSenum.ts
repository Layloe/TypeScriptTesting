enum Month {
    Jan,
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
    //add monthname
    switch(month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true
        break;
        default:
         isSummer = false    
    }
    return isSummer
}

console.log(isSummer(Month.Jun))