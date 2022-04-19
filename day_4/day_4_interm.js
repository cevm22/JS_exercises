console.log('Day 4 - Intermediate')
//=================================================
//Exercise - 1
//Write a code which can give grades to students according to theirs scores:
/*
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
function Exercise_1(score){
    let result = parseInt(score)
    switch (true) {
        case (result >= 90 && result <= 100):
            console.log('Your Score is: A')  
            break;
        case (result >= 70 && result <= 89):
            console.log('Your Score is: B')  
            break;
        case (result >= 60 && result <= 69):
            console.log('Your Score is: C')  
            break;
        case (result >= 50 && result <= 59):
            console.log('Your Score is: D')  
            break;
        case (result >= 00 && result <= 49):
            console.log('Your Score is: F')  
            break;
        default:
            console.log('Please use a positive value between 0 to 100')
    }
}
//Exercise_1(92)


//=================================================
//Exercise - 2
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
/*
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

function Exercise_2(){
    let month=(prompt('Give me a month and I return you the season')).toLowerCase()

    switch (true) {
        case (month === 'september' || month === 'october' || month === 'november'):
            console.log('the season is Autumn.')
            break;
        case (month === 'december' || month === 'january' || month === 'february'):
            console.log('the season is Winter.')
            break;
        case (month === 'march' || month === 'april' || month === 'may'):
            console.log('the season is Spring.')
            break;
        case (month === 'june' || month === 'july' || month === 'august'):
            console.log('the season is Summer.')
            break;  
            
        default:
            console.log('Please give me a correct month name')
    }
}

//Exercise_2()



//=================================================
//Exercise - 3
// Check if a day is weekend day or a working day. Your script will take day as an input.
/*
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

function Exercise_3(){
    let day= (prompt('Write a day of the week and I return if is a working day')).toLowerCase()

    if (day === 'saturday' || day === 'sunday'){
        console.log(`${day} is a weekend`);
    } else{
        console.log(`${day} is a working day`)
    }
}
//Exercise_3()


//=================================================
//=================================================
//=================================================
// ADVANCE EXERCISE
//=================================================
//=================================================
//=================================================
//Exercise 1
//Write a program which tells the number of days in a month.
/*
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/
function Exercise_adv_1(){
    let month=(prompt('Give me a month and I return you how many days it have')).toLowerCase()

    if (month==='january'||month==='march'||month==='may'||month==='july'||month==='august'||month==='october'||month==='december'){
        console.log(`${month} have 31 days`)
    }else if(month==='april'||month==='june'||month==='september'||month==='november'){
        console.log(`${month} have 30 days`)
    }else {
        console.log(`${month} have 28 days`)
    }
    
}

//Exercise_adv_1()

//=================================================
// Exercise 2
//Write a program which tells the number of days in a month, now consider leap year.
function Exercise_adv_2(){
    let year=parseInt(prompt('Give me a year and I return if is leap year'))

    if (year % 400 == 0){
        console.log(`Year ${year} is Leap year`)
    } else if (year % 100 == 0){
        console.log(`Year ${year} is NOT a Leap year`)
    }else if (year % 4 == 0){
        console.log(`Year ${year} is Leap year`)
    }else{
        console.log(`Year ${year} is NOT a Leap year`)
    }


}

//Exercise_adv_2()