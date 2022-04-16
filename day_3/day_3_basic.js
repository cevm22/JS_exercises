console.log('DAY 3 - BASIC')

//======================================================
// Exercise 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

function Exercise_1(){
    const firstName = 'cristian'
    const lastName = 'valencia'
    const country = 'mexico'
    const city = 'city'
    const age = 29
    const isMarried=false
    const now_year = 2022

    console.log(typeof(firstName))
    console.log(typeof(lastName))
    console.log(typeof(country))
    console.log(typeof(city))
    console.log(typeof(age))
    console.log(typeof(isMarried))
    console.log(typeof(now_year))
}
//Exercise_1()

//======================================================
// Exercise 2 & 3
/* 
2 - Check if type of '10' is equal to 10
3 - Check if parseInt('9.8') is equal to 10
*/
function Exercise_2_3(){
    const rev_1 = '10'
    const rev_2 = 10
    
    const rev_3 = parseInt('9.8')
    const rev_4 = 10

    console.log(rev_1=== rev_2) // R-> False, rev_1 is string and rev_2 is digit
    console.log(rev_3 == rev_4) // R-> False, rev_3 is rounded floor (9)
}
//Exercise_2_3()

//======================================================
// Exercise 4
/* 
Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.

*/

function Exercise_4(){
    console.log('TRUTHY values')
    console.log(0 == ' ') // R-> True
    console.log('4' == 4) // R-> True
    console.log(true==true)  //R-> True

    console.log('FALSY values')
    console.log(10>1000)
    console.log(undefined==0)
    console.log(NaN ===0)
}
//Exercise_4()

//======================================================
// Exercise 5
/*
    Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

    4 > 3    // R-> True
    4 >= 3   // R-> True
    4 < 3    // R-> False
    4 <= 3   // R-> False
    4 == 4   // R-> True
    4 === 4  // R-> True 
    4 != 4   // R-> False
    4 !== 4  // R-> False
    4 != '4' // R-> False
    4 == '4' // R-> True
    4 === '4'// R-> False
    Find the length of python and jargon and make a falsy comparison statement.
*/

function Exercise_5(){
    console.log(4 > 3) // R-> True
    console.log(4 >= 3)// R-> True
    console.log(4 < 3)// R-> False
    console.log(4 <= 3 )// R-> False
    console.log(4 == 4 )// R-> True
    console.log(4 === 4 )// R-> True
    console.log(4 != 4 )// R-> False
    console.log(4 !== 4 )// R-> False
    console.log(4 != '4')// R-> False
    console.log(4 == '4')// R-> True
    console.log(4 === '4')// R-> False

    const word_1='python'
    const word_2='jargon'
    console.log(word_1.length != word_2.length)
}
//Exercise_5()

//======================================================
// Exercise 6
/*
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12    // R->True
4 > 3 && 10 > 12    // R->False
4 > 3 || 10 < 12    // R->True
4 > 3 || 10 > 12    // R->True
!(4 > 3)            // R->False
!(4 < 3)            // R->True
!(false)            // R->True
!(4 > 3 && 10 < 12) // R->False
!(4 > 3 && 10 > 12) // R->True
!(4 === '4')        // R->True
There is no 'on' in both dragon and python

*/

function Exercise_6(){

    console.log(4 > 3 && 10 < 12)   // R->True
    console.log(4 > 3 && 10 > 12)   // R->False
    console.log(4 > 3 || 10 < 12)   // R->True
    console.log(4 > 3 || 10 > 12)   // R->True
    console.log(!(4 > 3))           // R->False
    console.log(!(4 < 3))           // R->True
    console.log(!(false))           // R->True
    console.log(!(4 > 3 && 10 < 12))// R->False 
    console.log(!(4 > 3 && 10 > 12))// R->True
    console.log(!(4 === '4'))       // R->True

    const word_1='python'
    const word_2='dragon'
    console.log(!(word_1.includes('on') && word_2.includes('on') ))
}

//Exercise_6()

//======================================================
// Exercise 7
/*
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

function Exercise_7(){
    let now = new Date()

    console.log(now.getFullYear()) // 2022 - year
    console.log(now.getMonth()) // 3 - month march
    console.log(now.getDate()) // 16 - day
    console.log(now.getDay()) // 6 - because is Saturday
    console.log(now.getHours()) // 15 - because is 3 pm
    console.log(now.getMinutes()) // 1 - because is 15:01:45
    
    //two ways to get timestamp UTC - 0
    const timestamp = Date.now() 
    console.log(timestamp) // 1650139427013
    const timestamp_2 = new Date().getTime() 
    console.log(timestamp_2)// 1650139427013


}

//Exercise_7()