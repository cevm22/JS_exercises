console.log('Day 11 - basic and interm - Destructuring')
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//==========================================================
// Exercise 1,2,3
/*
1 - Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
2 - Destructure and assign the elements of countries array to fin, est, sw, den, nor
3 - Destructure the rectangle object by its properties or keys.
*/ 

function Exercise_123(){
    console.log(constants)
    
    //Exercise 1
    let [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants
    console.log(`e = ${e} \npi = ${pi} \ngravity = ${gravity} \nhuman body temp = ${humanBodyTemp} \nwater boiling  temp = ${waterBoilingTemp}`)

    //Exercise 2
    console.log(countries)
    let[fin,est,sw,den,nor] = countries
    console.log(`fin= ${fin} est= ${est} sw= ${sw} den= ${den} nor= ${nor}`)

    //Exercise 3
    console.log(rectangle)
    let{width,height,area,perimeter} = rectangle
    console.log(`${width} ${height} ${area} ${perimeter}`)
}
//Exercise_123()


//==========================================================
// Exercise  interm 1 and 2
/*
1 - Iterate through the users array and get all the keys of the object using destructuring
2 - Find the persons who have less than two skills
*/

function Exercise_int_12(){
    console.log(users)

    let answer =[]

    for(let {age,name,scores,skills} of users)
    {
        console.log(age,name,scores,skills)
        if(skills.length <= 2 ){
            answer.push(name)//(`This student have equal or less 2 skills ${name}`)
            
        }
    }

    console.log(answer)
}

//Exercise_int_12()

