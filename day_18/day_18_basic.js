console.warn('DAY 18 - PROMISES')

//=========================================
//Exercise 1
//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'

function Exercise_1(){
        console.log("Excercise 1")
        return fetch(countriesAPI)
        .then(response =>  response.json())
        .then(data => (data))
        .catch(error => reject(error))

}

console.log(Exercise_1())
// console.log(prueba)

const fetch_data = async () => {
        try{
                const response = await fetch(countriesAPI)
                const data = await response.json()
                return(data)
                
        }catch (err){
                console.log(err)
        }
}
 let test = []
const countries_data = fetch_data().then(result => { test = result})

// console.log("===============")
// console.log(test)

async function data_countries(){
        let data
        try{
                let response = await fetch(countriesAPI)
                data = await response.json()
                //console.log(data)
                
        }catch(err){
                console.log("error handling")
        }
        return data
}
console.log('===== async and await')

let prueba = data_countries()
console.log(data_countries())
