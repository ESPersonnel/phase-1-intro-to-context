// Your code here

// Solution 1
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

// Solution 2
function createEmployeeRecords(arrayOfArrays){
  return arrayOfArrays.map(createEmployeeRecord)
}

// Solution 3
const getHour = function(dateTime){
  return parseInt(dateTime.match(/\d{4}$/)[0]) // returns the last two digits
}

// Solution 4
const getDate = function(dateTime){
  return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0] // returns the date
}

// Solution 5
function createTimeInEvent(empObject, timeIn){
  empObject.timeInEvents.push({
    type: "TimeIn",
    date: getDate(timeIn),
    hour: getHour(timeIn)
  })
  return empObject
}

// Solution 6
function createTimeOutEvent(arrEmployee, timeOut){
  arrEmployee.timeOutEvents.push({
    type: "TimeOut",
    date: getDate(timeOut),
    hour: getHour(timeOut)
  })
  return arrEmployee
}

// Solution 7
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

// Solution 8
function wagesEarnedOnDate(arrEmployee, date){
  let hours = hoursWorkedOnDate(arrEmployee, date)
  return hours * arrEmployee.payPerHour
}

// Solution 9
function allWagesFor(arrEmployee){
  let total = 0
  arrEmployee.timeInEvents.forEach(function(event){
    total += wagesEarnedOnDate(arrEmployee, event.date)
  })
  return total
}

// Solution 10
function calculatePayroll(arrEmployees){
  let total = 0
  arrEmployees.forEach(function(employee){
    total += allWagesFor(employee)
  })
  return total
}
