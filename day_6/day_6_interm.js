console.log('Day 6 - intermediate')

//===========================================================
// Exercise - 1

//Develop a small script which generate any number of characters random id:

function Exercise_int_1(size){
    let res=''
    let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const char_len = characters.length

    for (let i = 0 ; i<size; i++){
        x =(Math.floor(Math.random()*char_len))
        res += characters[x]
    }
    console.log(res)
}

//Exercise_int_1(25)


//===========================================================
// Exercise - 2

//Write a script which generates a random hexadecimal number.

function Exercise_int_2(size){
    let res='#'
    let characters ='abcdef0123456789'
    const char_len = characters.length

    for (let i = 0 ; i<size; i++){
        x =(Math.floor(Math.random()*char_len))
        res += characters[x]
    }
    console.log(res)
}

//Exercise_int_2(6)

//===========================================================
// Exercise - 3
//Write a script which generates a random rgb color number.


function Exercise_int_3(){
    let res=[]
    let x=0

    for (let i = 0 ; i<3; i++){
        x =(Math.floor(Math.random()*256))
        res[i] = x
    }
    console.log(`rgb(${res[0]},${res[1]},${res[2]})`)
}

//Exercise_int_3()

//===========================================================
// Exercise - 4, 5
//Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//[ 7, 7, 6, 7, 8, 7, 7, 7, 7, 5, … ]

function Exercise_int_45(){
    let new_vec = []
    let count = []
    for (const counrty of countries){
        new_vec.push(counrty.toUpperCase())
        count.push(counrty.length)
    }
    console.log(new_vec)
    console.log(count) //[ 7, 7, 6, 7, 8, 7, 7, 7, 7, 5, … ]
    
}
//Exercise_int_45()


//===========================================================
// Exercise - 6

//Use the countries array to create the following array of arrays:

/*
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

*/
function Exercise_int_6(){
    let new_vec =[]
    let letters_3 =''
    let temporal
    for (const counrty of countries){
        letters_3 = (counrty[0] + counrty[1] +counrty[2]).toUpperCase()
        temporal=[counrty,letters_3,counrty.length]
        new_vec.push(temporal)
    }
    console.log(new_vec)
}

//Exercise_int_6()


//===========================================================
// Exercise - 7
/*
In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
['Finland','Ireland', 'Iceland']
*/

function Exercise_int_7(){
    console.log(countries)
    const pattern = /land/gi
    let new_vec =[]
    let search_o
    for (index = 0; index<countries.length; index++){
        search_o=countries[index].match(pattern)
        if(search_o){
            new_vec.push(countries[index])
            
        }
    }
    if(new_vec.length==0){
        console.log('countries without land')
    }else{
    console.log(new_vec)
    }
}

//Exercise_int_7()

//===========================================================
// Exercise - 8
/*
In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'
['Albania', 'Bolivia','Ethiopia']
*/

function Exercise_int_8(){
    const pattern = /ia/gi
    let new_vec =[]
    let search_o
    for (index = 0; index<countries.length; index++){
        search_o=countries[index].match(pattern)
        if(search_o){
            new_vec.push(countries[index])
            
        }
    }
    if(new_vec.length==0){
        console.log('These are countries ends without ia')
    }else{
    console.log(new_vec)
    }
}
//Exercise_int_8()

//===========================================================
// Exercise - 9

//Using the above countries array, find the country containing the biggest number of characters. R> Ethiopia

function Exercise_int_9(){
    let temporal
    let max = 0
    let max_index = 0
    for(let i = 0; i < countries.length; i++){
        temporal = countries[i].length
        if(temporal > max){
            max = temporal
            max_index = i
        }
    }
    console.log(countries[max_index]) // R > Ethiopia
}

//Exercise_int_9()


//===========================================================
// Exercise - 10

//Using the above countries array, find the country containing only 5 characters.

function Exercise_int_10(){
    console.log(countries)
    let new_vec =[]
    let search_o
    for (index = 0; index<countries.length; index++){
        if(countries[index].length == 5){
            new_vec.push(countries[index])
            
        }
    }
    console.log(new_vec) //['Japan', 'Kenya']
}

//Exercise_int_10()

//===========================================================
// Exercise - 11

//Find the longest word in the webTechs array R> JavaScript

function Exercise_int_11(){
    let temporal
    let max = 0
    let max_index = 0
    for(let i = 0; i < webTechs.length; i++){
        temporal = webTechs[i].length
        if(temporal > max){
            max = temporal
            max_index = i
        }
    }
    console.log(webTechs[max_index]) // R > JavaScript
}
//Exercise_int_11()


//===========================================================
// Exercise - 12

//Use the webTechs array to create the following array of arrays:

//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

function Exercise_int_12(){
    let tech_len
    let new_array = []
    for(let i=0 ; i < webTechs.length; i++){
        tech_len=[webTechs[i],webTechs[i].length]
        new_array.push(tech_len)
    }
    console.log(new_array)
}

//Exercise_int_12()

//===========================================================
// Exercise - 13

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

function Exercise_int_13(){
    const stack=['MongoDB', 'Express', 'React', 'Node']
    let tech_len
    let new_array = []
    for(let i=0 ; i < stack.length; i++){
        tech_len=stack[i][0]
        new_array += tech_len
    }
    console.log(new_array)
}
//Exercise_int_13()


//===========================================================
// Exercise - 14

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

function Exercise_int_14(){
    const vector =["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    for(let i = 0 ; i < vector.length; i++ ){
        console.log(vector[i])
    }
}

//Exercise_int_14()



//===========================================================
// Exercise - 14

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

function Exercise_int_15(){
    const vector = ['banana', 'orange', 'mango', 'lemon'] 
    let new_vector = []
    for(let i = vector.length-1 ; i >= 0 ;i--){
        new_vector.push(vector[i])
    }
    console.log(new_vector) //[ "lemon", "mango", "orange", "banana" ]
}

//Exercise_int_15()


//===========================================================
// Exercise - 15

//Print all the elements of array as shown below.
/*
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/

function Exercise_int_16(){
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    for(let i=0; i<fullStack.length; i++){
        for(let x=0; x<fullStack[i].length; x++){
            console.log(fullStack[i][x])
        }
    }
}
//Exercise_int_16()