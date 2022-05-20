console.log('Day 13 - Consol.logs')

function Exercise_1(){
    
    //how change colors the msg in the console
    console.log('%c30 Days Of JavaScript', 'color:orange') // log output is orange
    console.log(
      '%c30 Days%c %cOf%c %cJavaScript%c',
      'color:green',
      '',
      'color:red',
      '',
      'color:yellow'
    ) // log output green red and yellow text

    //This is for warinings msg in console
    console.warn('This is a warning')
    //this is for error msg in console
    console.error('This is an error message')

    //msg like a info in console
    console.info('30 Days Of JavaScript challenge is trending on Github')


    //console.assert ONLY works if is FALSE
    console.assert(4 > 3, '4 is greater than 3') // no result
    console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

}

//Exercise_1()

function Exercise_2(){
    //console logs with tables for arrays and objects 
    const names = ['Asabeneh', 'Brook', 'David', 'John']
    console.table(names)

    const user = {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
      }
      console.table(user)

    const countries = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo']
      ]
    console.table(countries)

    const users = [
        {
          name: 'Asabeneh',
          title: 'Programmer',
          country: 'Finland',
          city: 'Helsinki',
          age: 250
        },
        {
          name: 'Eyob',
          title: 'Teacher',
          country: 'Sweden',
          city: 'London',
          age: 25
        },
        {
          name: 'Asab',
          title: 'Instructor',
          country: 'Norway',
          city: 'Oslo',
          age: 22
        },
        {
          name: 'Matias',
          title: 'Developer',
          country: 'Denmark',
          city: 'Copenhagen',
          age: 28
        }
      ]
      console.table(users)
}

//Exercise_2()


function Exercise_3(){
    const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()


// this count the times of it runs
const func = () => {
    console.count('Function has been called')
  }
  func() // Function has been called: 1
  func() // Function has been called: 2
  func() // Function has been called: 3
}
//Exercise_3()


//================================================
//Exercise 4 - Review the speed time of loops like: while, for, for of, forEach

function Exercise_4(){

    const len = all_countries.length

    let i = 0
    let temporal =[]
    //Cycle WHILE
    console.time('CYCLE WHILE')
    while(i<len){
        temporal.push(all_countries[i])
        //console.log(all_countries[i])
        i++
    }
    //console.log(temporal)
    console.warn('==============================================')
    console.timeEnd('CYCLE WHILE')
    
    let temporal_for =[]
    console.time('CYCLE FOR')
    for(let x = 0; x<len; x++){
        temporal_for.push(all_countries[x])
        //console.log(all_countries[x])

    }
    //console.log(temporal_for)
    console.warn('==============================================')
    console.timeEnd('CYCLE FOR')

    let temporal_for_of =[]
    console.time('CYCLE FOR OF')
    for( y of all_countries){
        temporal_for_of.push(all_countries[y])
        //console.log(all_countries[x])

    }
    //console.log(temporal_for_of)
    console.warn('==============================================')
    console.timeEnd('CYCLE FOR OF')


    console.time('CYCLE FOREACH')
    let teporal_for_each = []
    all_countries.forEach((element)=>teporal_for_each.push(element))
    console.warn('==============================================')
    console.timeEnd('CYCLE FOREACH')
}
//console.time('function')
//Exercise_4()
//console.timeEnd('function')
