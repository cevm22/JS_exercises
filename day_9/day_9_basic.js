console.log('day_9 - BASIC - High Order Functions')

// Exercise 1
//Explain the difference between forEach, map, filter, and reduce.
/*

FOREACH: iterate in each element of an array and it takes callback functions
MAP: Iterate an array elements and modify them, returning a new array. It takes callback functions
FILTER: Iterate through all the items and which have the filtering conditions return them in a new array
REDUCE: iterates through an array and return a single value.

*/

//===================================
// Exercise 2
// Define callback function example
function Exercise_2(){
  function par_func(number){
    return number % 2 == 0
  }

  let test = (func, number) => {
    let es_par = func(number)
    console.log(`The number ${number} is an even number: ${es_par}.`)
  }

test(par_func,5)
}

//Exercise_2()
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Eastland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//===================================
// Exercise - 3,4,5
/*
3 - Use forEach to console.log each country in the countries array.
4 - Use forEach to console.log each name in the names array.
5 - Use forEach to console.log each number in the numbers array.
*/

function Exercise_345(){
  //Exercise 3
  countries.forEach(country => console.log(country))
  console.log('================')
  
  //Exercise 4
  names.forEach(name => console.log(name))
  console.log('================')

  //Exercise 5
  numbers.forEach(number => console.log(number))
}

//Exercise_345()

//===================================
// Exercise - 6,7,8
/*
6 - Use map to create a new array by changing each country to uppercase in the countries array.
7 - Use map to create an array of countries length from countries array.
8 - Use map to create a new array by changing each number to square in the numbers array
9 - Use map to change to each name to uppercase in the names array
*/

function Exercise_6789(){
  //Exercise 6
  let to_upper_case = countries.map((element) => element.toUpperCase())
  console.log(to_upper_case) 

  //Exercise 7
  let len_arr = countries.map((country) => country.length)
  console.log(len_arr)

  //Exercise 8
  let sqr_arr = numbers.map((num) => num ** 2)
  console.log(sqr_arr)

  //Exercise 9
  let upper = names.map((name)=>name.toUpperCase())
  console.log(upper)
}

//Exercise_6789()

//===================================
// Exercise - 10
// Use map to map the products array to its corresponding prices.

function Exercise_10(){
  console.log(products)

  function is_price(price){
    if(price>0){
      return price
    }else{
      return 0
    }
  }

  let test_arr = products.map((element) =>  is_price(element.price) )
  console.log(test_arr) // Array(6) [ 3, 6, 0, 8, 10, 0 ]

}

//Exercise_10()

//===================================
// Exercise - 11,12,13,14,15

/*
11 - Use filter to filter out countries containing land.
12 - Use filter to filter out countries having six character.
13 - Use filter to filter out countries containing seven letters and more in the country array.
14 - Use filter to filter out country start with 'E';
15 - Use filter to filter out only prices with values.
*/

function Exercise_11_12_13_14_15(){
  console.log(countries)
  //Exercise 11
  let contain_land = countries.filter((element) => element.includes('land') || element.includes('Land'))
  console.log(contain_land) // [ "Finland", "IceLand", "Eastland" ]

  //Exercise 12
  let six_chr = countries.filter((element) => element.length==6)
  console.log(six_chr) // [ "Sweden", "Norway" ]

  //Exercise 13
  let greater_6 = countries.filter((element => element.length >= 7))
  console.log(greater_6)//   [ "Finland", "Denmark", "IceLand", "Eastland" ]

  //Exercise 14
  let contain_E = countries.filter((element)=> element[0] == 'E')
  console.log(contain_E)//  [ "Eastland" ]

  //Exercise 15
  let have_price = products.filter((prod) => prod.price > 0)
  console.log(have_price) /* Array(4) [ {…}, {…}, {…}, {…} ]
​
0: Object { product: "banana", price: 3 }
​
1: Object { product: "mango", price: 6 }
​
2: Object { product: "avocado", price: 8 }
​
3: Object { product: "coffee", price: 10 }
*/
}
//Exercise_11_12_13_14_15()


//===============================
// Exercise 16
//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function Exercise_16(vector){
  let str_arr = vector.filter((element) => typeof(element)=='string')
  console.log(str_arr)
}

//Exercise_16(['first ','SECOND',12,[1,2],{a:10},true,'last'])

//===============================
// Exercise 17
//Use reduce to sum all the numbers in the numbers array.

function Exercise_17(){
  console.log(numbers)

  let test = numbers.reduce((acc,cur) => acc + cur, 0) // last value is initial value
  console.log(test) // 55

}

//Exercise_17()


//===============================
// Exercise 18
/*
Use reduce to concatenate all the countries and to produce this sentence:
 Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
*/
function Exercise_18(){
  console.log(countries)
  let last_country = (countries.pop())
  let all = countries.reduce((acc,cur)=>acc +', '+ cur +'')
  console.log(`${all} and ${last_country} are north European counries`)
}
//Exercise_18()


//===============================
// Exercise 19

//Explain the difference between some and every
/*
SOME: check if some element is similar with something and returns boolean
EVERY: check if ALL elementes are similar with something and returns boolean
*/

//===============================
// Exercise 20 and 21
// 20 - Use some to check if some names' length greater than seven in names array
// 21 - Use every to check if all the countries contain the word land
function Exercise_20_21(){
  console.log(names) // [ "Asabeneh", "Mathias", "Elias", "Brook" ]

  //Exercise 20
  let review = names.some((element)=> element.length > 7)
  console.log(review) // true

  const test_arr = ['land', 'island', 'newland']
  //Exercise 21
  let rev = countries.every((element) => element.includes('land')) //false
  let rev_2 = test_arr.every((element) => element.includes('land')) //true
  console.log(rev)
  console.log(rev_2)
}

//Exercise_20_21()

//===============================
// Exercise 22
//Explain the difference between find and findIndex.

/*
FIND: Return the first element which match with condition
FINDINDEX: Return the INDEX of the element which match with condition
*/


//===============================
// Exercise 23,24,25,26

/*
23 - Use find to find the first country containing only six letters in the countries array
24 - Use findIndex to find the position of the first country containing only six letters in the countries array
25 - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
26 - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/

function Exercise_23_24_25_26(){
  console.log(countries) // [ "Finland", "Sweden", "Denmark", "Norway", "IceLand", "Eastland" ]

  //Exercise 23
  let first = countries.find((element)=> element.length==6)
  console.log(first) //Sweden

  //Exercise 24
  let first_6 = countries.findIndex((element)=> element.length==6)
  console.log(first_6) // 1

  //Exercise 25
  let norway = countries.findIndex((element)=> element == 'Norway')
  console.log(norway) // 3

  //Exercise 26
  let Russia = countries.findIndex((element)=> element == 'Russia')
  console.log(Russia) // -1
}

//Exercise_23_24_25_26()


