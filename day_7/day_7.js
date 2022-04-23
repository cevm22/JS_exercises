console.log('Day 7')

//====================================================
// FUNCTIONS

//
// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square() // 4

//Function returning value
function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

//Function with a parameter
function square(number) {
    return number * number
  }
  
  console.log(square(10))


//Function with two parameters
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))

//Function with unlimited number of parameters
// Let us access the arguments object
function sumAllNums_argument() {
 console.log(arguments)
}

sumAllNums_argument(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// function declaration
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173



//=============================================
//Anonymous Function
/*
Anonymous function or without name
*/
const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }

  // Function expression
  //Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.
const square = function(n) {
    return n * n
  }
  
  console.log(square(2)) // -> 4


//Self Invoking Functions:
//Self invoking functions are anonymous functions which do not need to be called to return a value.
  (function(n) {
    console.log(n * n)
  })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum)

//=========================================================

//Unlimited number of parameters in arrow function
/**
* Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
* Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.
 */
// Let us access the arguments object
const sumAllNums = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
   }
   
   sumAllNums(1, 2, 3, 4)
   console.log(sumAllNums(1, 2, 3, 4)) // 10
   
   // [1, 2, 3, 4]

// if we have only one line in the code block, it can be written as follows, explicit return to the variable 'square'
const square = n => n * n  // -> 4

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries)) // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]



  const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Asabeneh', 'Yetayeh'))

//The above function has only the return statement, therefore, we can explicitly return it as follows.

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))


//====================================================
//Function with default parameters
//Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(1819))