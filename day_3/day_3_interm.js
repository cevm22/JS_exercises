console.log('DAY 3 - INTERMEDIATE')

//======================================================
// Exercise 1
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*
Enter base: 20
Enter height: 10
The area of the triangle is 100
*/
function Exercise_in_1(){
    let base = prompt('Base in cm', 'Base of triangle input')
    let height = prompt('Height in cm','height of triangle input')

    console.log('The triangle area is: ' + (parseFloat(base)*parseFloat(height)*0.5))
}

//Exercise_in_1()

//======================================================
// Exercise 2
//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
function Exercise_in_2(){
    let a = prompt('side A in cm', '0')
    let b = prompt('side B in cm','0')
    let c = prompt('side C in cm','0')


    console.log('The triangle perimeter is: ' + (parseFloat(a)+parseFloat(b)+parseFloat(c)))
}

//Exercise_in_2()

//======================================================
// Exercise 3
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

function Exercise_in_3(){
    let base = prompt('Base in cm', '0')
    let height = prompt('Height in cm','0')

    console.log('The rectangle area is: ' + (parseFloat(base)*parseFloat(height)))
    console.log('The rectangle perimeter is: ' + (2*(parseFloat(base)+parseFloat(height))))

}
//Exercise_in_3()

//======================================================
// Exercise 4
//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

function Exercise_in_4(){
    let radius = prompt('radius of circle','0') 
    const pi = 3.14

    console.log('The circle area is: ' + (parseFloat(radius)*parseFloat(radius)*pi))
    console.log('The circumference area is: ' + (2*parseFloat(radius)*pi))


}

//Exercise_in_4()

//======================================================
// Exercise 5
// Calculate the slope, x-intercept and y-intercept of y = 2x -2


function Exercise_in_5(){
    let x = prompt('Give a X value to calculate slope of y = 2x -2 ')

    console.log('The slope of Y is: ' + ((2*parseFloat(x))-2))
    return x
}

//Exercise_in_5()

//======================================================
// Exercise 6
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)


function Exercise_in_6(){
    let x1 = 2
    let x2 = 6
    let y1 = 2
    let y2 = 10

    let m = ((y2 - y1) / (x2 / x1))

    console.log('The slope is: ' + m)
    return m
}

//Exercise_in_6()


//======================================================
// Exercise 7
// Compare the slope of above two questions.

function Exercise_in_7(){
    let first_slope = Exercise_in_5()
    let second_slope = Exercise_in_6()

    console.log(first_slope === second_slope)
}

//Exercise_in_7()

//======================================================
// Exercise 8
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

function Exercise_in_8(){
    let x = prompt('Give X to get Y','0')
    let x2 = parseFloat(x) ** 2;
    let x1 = parseFloat(x) * 6;

    console.log('the Y value is: '+(x2 + x1 + 9))

}

//Exercise_in_8()

//======================================================
// Exercise 9
// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/*
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/

function Exercise_in_9(){
    let hrs = prompt('Enter your hours','1') 
    let rate = prompt('Enter rate per hr','1') 

    console.log('weekly earning is: ' + ((parseFloat(hrs) * parseFloat(rate)) * 7))
}
//Exercise_in_9()


//======================================================
// Exercise 10
// If the length of your name is greater than 7 say, your name is long else say your name is short.

function Exercise_in_10(){
    const name = 'cris'
    if (name.length > 7){
        console.log('Your name is LONG')
    }else{
        console.log('Your name is short')
    }
}
//Exercise_in_10()


//======================================================
// Exercise 11
//Compare your first name length and your family name length and you should get this output:
//Your first name, Asabeneh is longer than your family name, Yetayeh


function Exercise_in_11(){
    let first_name = 'cristian'
    let last_name = 'valencia'

    if (first_name.length > last_name.length){
        console.log(`Your first name, ${first_name} is longer than your family name, ${last_name}`)
    }else{
        console.log(`Your family name, ${last_name} is longer than your first name, ${first_name}`)
    }
}

//Exercise_in_11()

//======================================================
// Exercise 12
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

function Exercise_in_12(){
    let myAge = prompt('My actual Age','0');
    let yourAge = prompt('Your age','0');

    let diff = parseFloat(myAge) - parseFloat(yourAge)

    if (diff < 0){
        diff = diff * -1;
        console.log(`You are ${diff} years older than me`)
    }else{
        console.log(`I\'m ${diff} years older than you` )
    }
}
//Exercise_in_12()


//======================================================
// Exercise 13
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/*
Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/

function Exercise_in_13(){
    let age = prompt('How old are you?',0);
    let delta = 18 - age ;

    if (age >= 18){
        console.log(`You are ${age}. You are old enough to drive`)
    }else if(age <= 0){
        console.log('Please enter a positive number')
    }else{
        console.log(`You are ${age}. You will be allowed to drive after ${delta} years.`)
    }
}

//Exercise_in_13()

//======================================================
// Exercise 14
//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
/* 1 year = 31556926 secs
Enter number of years you live: 100
You lived 3153600000 seconds.
*/

function Exercise_in_14(){
    let age = prompt('How old are you?',0);
    let year = 31556926;

    let years_secs= parseFloat(age) * year
    console.log(`You lived ${years_secs}`)
}

//Exercise_in_14()

//======================================================
// Exercise 15
// Create a human readable time format using the Date time object
/*
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/

function Exercise_in_15(){
    const now = new Date()
    const year = now.getFullYear() // return year
    const month = now.getMonth() + 1 // return month(0 - 11)
    const date = now.getDate() // return date (1 - 31)
    const hours = now.getHours() // return number (0 - 23)
    const minutes = now.getMinutes() // return number (0 -59)

    console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
    console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`)    // 4/1/2020 0:56  
}

//Exercise_in_15()

//======================================================
//======================================================
// ADVANCE EXERCISE
//======================================================
//======================================================
// Exercise 1
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

function doble_digit(digit){
    let digit_str = digit.toString()
    if (digit_str.length == 1){
        return ('0' + digit_str) //retornar 0 adicional en caso de que sea un solo digito pendiente
    }else{
        return digit_str
    }

}

function Exercise_ad_1(){
    const now = new Date()
    const year = now.getFullYear() // return year
    const month = doble_digit(now.getMonth() + 1) // return month(0 - 11)
    const date = doble_digit(now.getDate()) // return date (1 - 31)
    const hours = doble_digit(now.getHours()) // return number (0 - 23)
    const minutes = doble_digit(now.getMinutes()) // return number (0 -59)


    console.log(`${year}-${month}-${date} ${hours}:${minutes}`) //2022-04-18 18:54

}


//Exercise_ad_1()

