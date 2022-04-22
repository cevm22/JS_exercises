console.log('Day 6 - Basic')

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//===========================================================
// Exercise - 1

//Iterate 0 to 10 using for loop, do the same using while and do while loop

function Exercise_1(){
    console.log('==================FOR LOOP==================')
    for (i=0; i<11; i++){
        console.log(`FOR LOOP # > ${i}`)
    }

    console.log('================== WHILE LOOP ==================')
    let a=0
    while(a < 11){
        console.log(`WHILE LOOP # > ${a}`)
        a++
    }

    console.log('================== DO WHILE LOOP ==================')
    let b = 0
    do{
        console.log(`DO WHILE LOOP # > ${b}`)
        b++
    } while (b < 11)
}
//Exercise_1()

//===========================================================
// Exercise - 2

//Iterate 10 to 0 using for loop, do the same using while and do while loop
function Exercise_2(){
    console.log('==================FOR LOOP==================')
    for (i=10; i>-1; i--){
        console.log(`FOR LOOP # > ${i}`)
    }

    console.log('================== WHILE LOOP ==================')
    let a=10
    while(a > -1){
        console.log(`WHILE LOOP # > ${a}`)
        a--
    }

    console.log('================== DO WHILE LOOP ==================')
    let b = 10
    do{
        console.log(`DO WHILE LOOP # > ${b}`)
        b--
    } while (b > -1)
}
//Exercise_2()


//===========================================================
// Exercise - 3

// Iterate 0 to n using for loop

function Exercise_3(max){

    for (i=0; i<max+1; i++){
        console.log(`Iteration num: ${i}`)
    }
}

//Exercise_3(30)


//===========================================================
// Exercise - 4
//Write a loop that makes the following pattern using console.log():
/**
    #
    ##
    ###
    ####
    #####
    ######
    ####### 
 */
function Exercise_4(){
    let pattern = '#'
    let newpatter= ''
    for(i=0;i<7;i++){

        //newpatter = pattern + newpatter
        newpatter += pattern
        console.log(newpatter)
    }

}

//Exercise_4()

//===========================================================
// Exercise - 5
// Use loop to print the following pattern:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

function Exercise_5(){

    for(i=0;i<11;i++){

        console.log(`${i} x ${i} = ${i * i}`)
    }
}

//Exercise_5()

//===========================================================
// Exercise - 6
// Using loop print the following pattern
/**
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

 function Exercise_6(){
    for(i=0;i<11;i++){

        console.log(`${i} x ${i**2} = ${i ** 3}`)
    }
 }

 //Exercise_6()

 //===========================================================
// Exercise - 7
// Use for loop to iterate from 0 to 100 and print only even numbers


function Exercise_7(){
    for(i=0;i<101;i++){
        if(i==0){
            console.log('loop num = 0')
            continue
        }
        if (i % 2 == 0){
            console.log(`Is even num = ${i}`)
        }    
    }
}

//Exercise_8()

 //===========================================================
// Exercise - 8
// Use for loop to iterate from 0 to 100 and print only even numbers


function Exercise_8(){
    for(i=0; i<101; i++){
        if(i==0){
            console.log('loop num = 0')
            continue
        }
        if (i % 2 > 0){
            console.log(`Is odd num = ${i}`)
        }    
    }
}

//Exercise_8()

 //===========================================================
// Exercise - 9
//Use for loop to iterate from 0 to 100 and print only prime numbers


function prime(num){
    if (num== 0 || num == 1 || num == 4){
        return false
    }
    for(let x=2 ; x < num/2; x++){
        if (num % x == 0){
            return false
        }
    } 
    return true
}

function Exercise_9(){

    for (let i=0;i<101;i++){
        let confirm = prime(i)
        if (confirm == true){
            console.log(`prime number: ${i}`)
        }else{
            continue
        }
        
    }
}


//Exercise_9()

//===========================================================
// Exercise - 10
//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.

function Exercise_10(){
    let sum = 0
    for (let i=0;i<101;i++){
        sum += i
    }
    console.log(sum)
}
//Exercise_10()

//===========================================================
// Exercise - 11, 12
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

function Exercise_11_12(){
    let sum = 0
    let sum_odd=0
    for (let i=0;i<101;i++){
        if(i%2==0){
            sum += i
        }else{
            sum_odd+= i
        }
    }
    console.log('even > '+sum) //2550
    console.log('odd > '+sum_odd) //2500
    // 12
    //Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as arra
    console.log([sum,sum_odd])
}

//Exercise_11_12()

//===========================================================
// Exercise - 13, 14
/*
Develop a small script which generate array of 5 random numbers

Develop a small script which generate array of 5 random numbers and the numbers must be unique
*/

function rand(){
    return Math.floor(Math.random()*10)
}

function Exercise_13_14(){
    let random_5 = []
    for (let i = 0; i < 5; i++){
        random_5[i] = rand()
    }
    console.log(random_5)

    let random_unique = []
    let temporal
    for (let i = 0; i < 5; i++){
        temporal = rand()
        while (random_unique.includes(temporal)){
            temporal=rand()
        }
        random_unique[i] = temporal
    }
    console.log(random_unique)
}

//Exercise_13_14()


//===========================================================
// Exercise - 15
//Develop a small script which generate a six characters random id:

function Exercise_15(){
    let res=''
    let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const char_len = characters.length

    for (let i = 0 ; i<6; i++){
        x =(Math.floor(Math.random()*char_len))
        res += characters[x]
    }
    console.log(res)
}

//Exercise_15()
