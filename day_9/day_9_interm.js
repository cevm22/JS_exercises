console.log('day_9 - INTERMEDIATE - High Order Functions')

//=====================================
// Exercise 1
/*
Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
*/

function Exercise_int_1(){
    console.log(products)
    /*
    products = [
                { product: 'banana', price: 3 },
                { product: 'mango', price: 6 },
                { product: 'potato', price: ' ' },
                { product: 'avocado', price: 8 },
                { product: 'coffee', price: 10 },
                { product: 'tea', price: '' },
                    ]
    */
    let test = products.filter((prod)=> prod.price > 0).map((element)=>element.price).reduce((acc,cur)=> acc + cur)
    console.log(test)

    //EXPLAIN BELOW

    let first =  products.filter((prod)=> prod.price > 0)
    console.log(first)
    /*
    first = [
                { product: 'banana', price: 3 },
                { product: 'mango', price: 6 },
                { product: 'avocado', price: 8 },
                { product: 'coffee', price: 10 },
            ]
    */

    let second = first.map((element)=>element.price)
    console.log(second) // Array(4) [ 3, 6, 8, 10 ]

    let last = second.reduce((acc,cur)=>acc + cur)
    console.log(last) // 27

}
//Exercise_int_1()


//=====================================
// Exercise 2
/*
Find the sum of price of products using only reduce reduce(callback))
*/

function Exercise_int_2(){
    console.log(products)
    //explained here:
    //https://stackoverflow.com/questions/15748656/javascript-reduce-on-object
    let test = Object.values(products).reduce(function(acc,{price}){

        if (acc > 0 || price > 0){
            return Number(acc) + Number(price)
        }
        }, 0)
        
    console.log(test)
}

//Exercise_int_2()

//=====================================
// Exercise 3
/*
Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
*/

function Exercise_int_3(word){
    console.log(all_countries)

    let search = all_countries.filter((element)=> element.name.includes(word))

    console.log(search)
}
//Exercise_int_3('land')

//=====================================
// Exercise 4
/*
Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
*/

function Exercise_int_4(letter){
    console.log(all_countries)
    
    let search = all_countries.filter((element)=> element.name[0].toLowerCase()==letter.toLowerCase())

    console.log(`The letter ${letter} is used at beggining in ${search.length} countries`)
    console.log(search)
}
//Exercise_int_4('a')

//=====================================
// Exercise 5, 6
/*
5 - Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
6 - Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

*/
function Exercise_int_56(vec){

    let first_10 = vec.slice(0,10)
    let last_10 = vec.slice(vec.length-11,vec.length-1)

    console.log(first_10)
    console.log(last_10)

}
//Exercise_int_56(all_countries)

//=====================================
// Exercise 7
/*
Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
*/

function Exercise_int_7(){
    let vec = []
    //create a new vec with only countries names
    all_countries.forEach(function(element) {
        return vec.push(element.name)
    })

    //create letters array to search
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    
    //init the object to return the results
    let new_object = []
    //make for loop for letters string array
    for(let i = 0; i < letters.length; i++){
        //get the letter position
        let letter = letters[i]
        //search by letter in all of array
        let temporal = all_countries.filter((element)=> element.name[0].toLowerCase()==letter.toLowerCase())

        new_object.push({
            'letter': letter,
            'times': temporal.length
        })

    }

    console.log(new_object)
}

//Exercise_int_7()