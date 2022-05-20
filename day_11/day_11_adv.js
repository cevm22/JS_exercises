console.log('Day 11 - Advance Destructuring')

//======================================================
// Exercise 1

//Destructure the countries object print name, capital, population and languages of all countries

function Exercise_adv_1(){
    console.log(all_countries)

    for (let {name, capital, population, languages} of all_countries){
        console.log(`Country: ${name} \nCapital: ${capital} \nPopulation: ${population} \nLanguages: ${languages}`)
    }
}
//Exercise_adv_1()

//======================================================
// Exercise 2
//
//A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

function Exercise_adv_2(){
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    let [name,skills,score] = student
    console.log(name, skills, score[2], score[3]) //David  Array(4) [ "HTM", "CSS", "JS", "React" ] 90 95
}

//Exercise_adv_2()

//======================================================
// Exercise 3
//
//Write a function called convertArrayToObject which can convert the array to a structure object.

function Exercise_adv_3(){
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]]
        
        let answer = []
        for (let[name,skills,scores] of students){
            answer.push({
                'name':name,
                'skills':skills,
                'scores':scores
            })
        }
    console.log(answer)
}
//Exercise_adv_3()


//======================================================
// Exercise 4
//
/*
4 - Copy the student object to newStudent without mutating the original object. In the new object add the following ?
- Add Bootstrap with level 8 to the front end skill sets
- Add Express with level 9 to the back end skill sets
- Add SQL with level 8 to the data base skill sets
- Add SQL without level to the data science skill sets
*/
function deepCopy(obj) {
    if(typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if(obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if(obj instanceof Array) {
        return obj.reduce((arr, item, i) => {
            arr[i] = deepCopy(item);
            return arr;
        }, []);
    }

    if(obj instanceof Object) {
        return Object.keys(obj).reduce((newObj, key) => {
            newObj[key] = deepCopy(obj[key]);
            return newObj;
        }, {})
    }
}
function Exercise_adv_4(){
    const student = {
        name: 'David',
        age: 25,
        skills: {
          frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
          ],
          backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
          ],
          dataBase:[
            { skill: 'MongoDB', level: 7.5 },
          ],
          dataScience:['Python', 'R', 'D3.js']
        }
      }

      let {name,age} = student

      let test = deepCopy(student.skills)
      let {frontEnd,backEnd,dataBase,dataScience} = test
      frontEnd.push({skill: 'BootStrap',level: 8})
      backEnd.push({skill: 'Express',level: 9})
      dataBase.push({ skill: 'SQL',level: 8})
      dataScience.push('SQL')
      let last = {
          'name':name,
          'age':age,
          'skills':{
              'frontEnd':frontEnd,
              'backEnd':backEnd,
              'dataBase':dataBase,
              'dataScience':dataScience

          }
        }
      console.log(last)
      console.log(student)
}
//Exercise_adv_4()