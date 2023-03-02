const assert = require("assert");

/**
 * This is a series of exercises to practice composing functions.
 * The idea is, rather than doing everything in one big function,
 * we can break out the different behaviors we need into separate functions.
 */

/**
 * Task 1:
 * Write a function that gets the day of the week from a date string
 */

function getDayOfWeek(dateString) {

    const myDate = new Date(dateString),
      month = myDate.getMonth(),
      date = myDate.getUTCDate(),
      day = myDate.getUTCDay()

  let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  let months  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return weekday[day].toLowerCase()
  // hint: you can create a Date with "new Date(dateString)"
  // hint: you can use the `getUTCDay()` method to get a number corresponding to the week day,
  // for example 0 = sunday, 1 = monday, etc
  // TODO
}

assert.strictEqual(getDayOfWeek("2023-01-18T03:00:00Z"), "wednesday");
assert.strictEqual(getDayOfWeek("2023-01-17T03:00:00Z"), "tuesday");
assert.strictEqual(getDayOfWeek("2023-01-19T13:00:00Z"), "thursday");