console.warn('DAY 18 - PROMISES')

//=========================================
//Exercise 1
//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
let api = {}
function Exercise_1(){
    
        fetch(countriesAPI)
        .then(response =>  response.json())
        .then(data => (data.text))
        .catch(error => reject(error))

}
const test = Exercise_1()
console.log(Exercise_1())