console.warn('DAY 16 - JSON')

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

//===========================================================
// Exercise 1

/*
Change skills array to JSON using JSON.stringify()
Stringify the age variable
Stringify the isMarried variable
Stringify the student object
*/

function Exercise_1(){
    let skills_json = JSON.stringify(skills,null,4)
    console.log(skills_json)

    let age_json = JSON.stringify(age,null,4)
    console.log(age_json)
    
    let isMarried_json = JSON.stringify(isMarried,null,4)
    console.log(isMarried_json)

    let student_json = JSON.stringify(student,null,4)
    console.log((student_json))


}
//Exercise_1()

//Stringify the students object with only firstName, lastName and skills properties

function Exercise_2(){
    let student_stringify = JSON.stringify(student,['firstName','lastName','skills'],4)
    console.log(student_stringify)
}
//Exercise_2()

/*
Parse the txt JSON to object.
Find the user who has many skills from the variable stored in txt.
*/

function Exercise_3(){
    let txt_obj = JSON.parse(txt)
    let temporal = ['',0]
    
    console.log(typeof txt_obj)

    for(let x in txt_obj){
        if(txt_obj[x].skills.length > temporal[1]){
            temporal = [x,Number(txt_obj[x].skills.length)]
        }
    }

    
    console.log(temporal)
}
//Exercise_3()//[ "Asab", 8 ]