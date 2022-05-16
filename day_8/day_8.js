console.log('Day 8 - Basics')

//====================================================
//  OBJECTS

//====================================================
// Exercise - 1 to 5
/*
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo
*/
function Exercise_1(){
const dog = {
        name: 'perro',
        legs: 4,
        age: 1,
    bark: function(){
        return 'woof woof'
    }
}

console.log(dog.bark())

console.log(dog.age)
console.log(dog.name)
console.log(dog.legs)
//add property to object dog
dog.breed = 0
console.log(dog)

//add method getDogInfo to object dog
dog.getDogInfo = function(){
    let name = this.name
    let legs = this.legs
    let age = this.age
    let skill =  this.bark()
    return `The dog names is: ${name}, have ${legs} legs, it age is: ${age} and have the skill bark: ${skill}`
}

console.log(dog.getDogInfo())

}

//Exercise_1()

//====================================================
// Exercise - LEVEL 2 - 1 to 7
/*
Find the person who has many skills in the users object.

Count logged in users, count users having greater than equal to 50 points from the following object.

Find people who are MERN stack developer from the users object

Set your name in the users object without modifying the original users object

Get all keys or properties of users object

Get all the values of users object

Use the countries object to print a country name, capital, populations and languages.
*/


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

function Exercise_2_1(){
    //get array of the objects
    let obj_size=(Object.keys(users)).length // 7
    let temporal = ['',0]
    //console.log(obj_size)

    for( let element in users){
        //access to each element skills array
        let skills_len = (users[element].skills).length //  [ "HTML", "CSS", "JavaScript" ] .....
        console.log(skills_len)
        if (temporal[1] < skills_len){
            temporal = [(element),skills_len]
        }
    }
    console.log(temporal) 
}
//Exercise_2_1() //Array [ "Asab", 8 ]

function Exercise_2_2(){
    //Count logged in users, 
    let logged = 0
    for(let element in users){
        if(users[element].isLoggedIn){
            logged++
        }
    }
    console.log(`Total users were logged: ${logged}`)

    //count users having greater than equal to 50 points from the following object.
    let users_up_50 = 0
    for (let element in users){
        if(users[element].points>= 50){
            users_up_50++
        }
    }
    console.log(`Total users are equal or greater than 50 points >>>> ${users_up_50}`)

}

//Exercise_2_2()


//Find people who are MERN stack developer from the users object
function Exercise_2_3(){
    for(let element in users){
        let skill_arr = users[element].skills //get array
        let temp_lower = ((skill_arr.toString()).toLowerCase()) // array to string and lowercase
        let temporal = (temp_lower.split(',')) // return string to array
        //search the stack
        let mongodb = temporal.includes('mongodb')
        let express = temporal.includes('express')
        let react = temporal.includes('react')
        let node = temporal.includes('node')
        
        if (mongodb == true && express == true && react == true && node == true){
            console.log(`This user use MERN stack: ${element}` )
        }

    }
}
//Exercise_2_3()

//copy the object and add my data

function Exercise_2_4(){
    //copy all the object
    let copy_ob = Object.assign({},users)
    console.log(users)

    copy_ob.cristian={
        email: 'cristian@cristian.com',
        skills: ['HTML', 'CSS', 'JavaScript','Python','MongoDB'],
        age: 28,
        isLoggedIn: true,
        points: 80
      },
    console.log(copy_ob)
}

//Exercise_2_4()

function Exercise_2_5(){
    //get all values and keys from object in array
    console.log(Object.entries(users)) 

    //get all the values from object as an array
    console.log(Object.values(users))
}
//Exercise_2_5