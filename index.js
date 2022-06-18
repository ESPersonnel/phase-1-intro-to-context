// Your code here

// createEmployeeRecord
// Argument(s)
// A 4-element Array of a String, String, String, and Number corresponding to a first name, family name, title, and pay rate per hour
// Returns
// JavaScript Object with keys:
// firstName
// familyName
// title
// payPerHour
// timeInEvents
// timeOutEvents
// Behavior
// Loads Array elements into corresponding Object properties. Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.
// createEmployeeRecords
// Argument(s)
// Array of Arrays
// Returns
// Array of Objects
// Behavior
// Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array
// createTimeInEvent
// Argument(s)
// An employee record Object
// A date stamp ("YYYY-MM-DD HHMM")
// Returns
// The employee record
// Behavior
// Add an Object with keys to the timeInEvents Array on the record Object:
// type: Set to "TimeIn"
// hour: Derived from the argument
// date: Derived from the argument
// createTimeOutEvent
// Argument(s)
// An employee record Object
// A date stamp ("YYYY-MM-DD HHMM")
// Returns
// The employee record
// Behavior
// Add an Object with keys to the timeOutEvents Array on the record Object:
// type: Set to "TimeOut"
// hour: Derived from the argument
// date: Derived from the argument
// hoursWorkedOnDate
// Argument(s)
// An employee record Object
// A date of the form "YYYY-MM-DD"
// Returns
// Hours worked, an Integer
// Behavior
// Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
// wagesEarnedOnDate
// Argument(s)
// An employee record Object
// A date of the form "YYYY-MM-DD"
// Returns
// Pay owed
// Behavior
// Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.
// allWagesFor
// Argument(s)
// An employee record Object
// Returns
// Pay owed for all dates
// Behavior
// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number. HINT: You will need to find the available dates somehow...
// calculatePayroll
// Argument(s)
// Array of employee records
// Returns
// Sum of pay owed to all employees for all dates, as a number
// Behavior
// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.


// let createEmployeeRecord = function(employee){
//   return {
//     firstName: employee[0],
//     familyName: employee[1],
//     title: employee[2],
//     payPerHour: employee[3],
//     timeInEvents: [],
//     timeOutEvents: []
//   }
// }

// function createEmployeeRecords(employees){
//   return employees.map(createEmployeeRecord)
// }

// function createTimeInEvent(record, date){
//   record.timeInEvents.push({
//     type: "TimeIn",
//     hour: date.substring(11, 13),
//     date: date
//   })
//   return record
// }

// fun



// Solution

let createEmployeeRecord = function(employee){
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

// Alternate
function createEmployeeRecords(arrayOfArrays){
  return arrayOfArrays.map(createEmployeeRecord)
}

const getHour = function(dateTime){
  return parseInt(dateTime.match(/\d{4}$/)[0]) // returns the last two digits
}

const getDate = function(dateTime){
  return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0] // returns the date
}

function createTimeInEvent(empObject, timeIn){
    // 6) creates the correct type
    // 7) extracts the correct date
    // 8) extracts the correct hour
  empObject.timeInEvents.push({
    type: "TimeIn",
    date: getDate(timeIn),
    hour: getHour(timeIn)
  })
  return empObject
}

function createTimeOutEvent(arrEmployee, timeOut){
  arrEmployee.timeOutEvents.push({
    type: "TimeOut",
    date: getDate(timeOut),
    hour: getHour(timeOut)
  })
  return arrEmployee
}

// function hoursWorkedOnDate(arrEmployee, date){
//   let timeIn = arrEmployee.timeInEvents.find(function(event){
//     return event.date === date
//   })
//   let timeOut = arrEmployee.timeOutEvents.find(function(event){
//     return event.date === date
//   })
//   if(timeIn && timeOut){
//     return parseInt(timeOut.hour) - parseInt(timeIn.hour)
//   }
//   return 0
// }
// Repeat this code and calculate the employee worked for 2 hours

function hoursWorkedOnDate(arrEmployee, date){
  let timeIn = arrEmployee.timeInEvents.find(function(event){
    return event.date === date
  })
  let timeOut = arrEmployee.timeOutEvents.find(function(event){
    return event.date === date
  })
  let totalTime = (timeOut.hour - timeIn.hour) / 100
  return totalTime
}

function wagesEarnedOnDate(arrEmployee, date){
  let hours = hoursWorkedOnDate(arrEmployee, date)
  return hours * arrEmployee.payPerHour
}

function allWagesFor(arrEmployee){
  let total = 0
  arrEmployee.timeInEvents.forEach(function(event){
    total += wagesEarnedOnDate(arrEmployee, event.date)
  })
  return total
}

function calculatePayroll(arrEmployees){
  let total = 0
  arrEmployees.forEach(function(employee){
    total += allWagesFor(employee)
  })
  return total
}


// function createEmployeeRecords(rows){
//   return rows.map(createEmployeeRecord)
// }
// const getHour = function(dateTime){
//   return parseInt(dateTime.match(/\d{4}$/)[0])
// }
// const getDate = function(dateTime){
//   return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0]
// }

