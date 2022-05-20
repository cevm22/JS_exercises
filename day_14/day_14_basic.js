console.warn('Day 14 - Error handling')

/*
TRY: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

CATCH: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

FINALLY: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.

THROW: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object. Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. Each of the following throws an exception:

//========================================
Error Types:
- ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
- SyntaxError: A syntax error has occurred
- TypeError: A type error has occurred

*/
function Exercise_1(){

  try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
    //The catch block take a parameter. It is common to pass e, err or error as a parameter to the catch block. This parameter is an object and it has name and message keys. Lets use the name and message.
  } catch (err) {
    console.log('%cName of the error', 'color:orange',err.name)
    console.log('%cError message', 'color:orange',err.message)
  } finally {
    console.log('In any case I will be executed')
  }

    //THROW examples
  const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun()
}
//Exercise_1()