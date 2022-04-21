console.log('Day 5 - Basic')
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
//==============================================
// Exercise - 1,2,3,4,5
/*
1 - Declare an empty array;
2 - Declare an array with more than 5 number of elements
3 - Find the length of your array
4 - Get the first item, the middle item and the last item of the array
5 - Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
*/


function Exercise_12345(){
    let vec = []
    let vec_5 = [1,2,3,4,5]
    console.log(vec_5.length)
    let lastindex= vec_5.length-1
    console.log(vec_5[0],vec_5[2],vec_5[lastindex])
    let longarray= ['text',0123,[1,5,'text in array'], {word1:'random', number: 0},'looooooong text random word', {bool:true}]
    console.log(longarray)
}

//Exercise_12345()

//==============================================
// Exercise - 6
//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


//==============================================
// Exercise - 7,8,9,10
/*
7 - Print the array using console.log()
8 - Print the number of companies in the array
9 - Print the first company, middle and last company
10 - Print out each company
*/

function Exercise78910(){
    console.log(itCompanies)
    console.log(itCompanies.length - 1)
    console.log(itCompanies[0],itCompanies[3], itCompanies[itCompanies.length-1])

    for (let index = 0; index < itCompanies.length; index++){
        //11 - Change each company name to uppercase one by one and print them out
        let capital_letter= itCompanies[index].toUpperCase()
        console.log((capital_letter))
    }
}
//Exercise78910()

//==============================================
// Exercise - 12
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

function Exercise_12(){
    let a =itCompanies
    console.log(`${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}, ${a[4]}, ${a[5]} and ${a[6]} are big IT companies`)
}
//Exercise_12()

//==============================================
// Exercise - 13
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

function Exercise_13(company){
    let index = itCompanies.indexOf(company)

    index === -1 ? console.log('This Company doesn\'t exists'):console.log('Company exists')
}
//Exercise_13('Google')


//==============================================
// Exercise - 14
//Filter out companies which have more than one 'o' without the filter method

function Exercise_14(){
    const pattern = /o/gi
    let search_o
    for (index = 0; index<itCompanies.length; index++){
        search_o=itCompanies[index].match(pattern)
        if(search_o){
            if(search_o.length > 1){
                console.log(itCompanies[index])
            }
        }
    }
}
//Exercise_14() // facebook, google, microsoft


//==============================================
// Exercise - 15,16
// Sort the array using sort() method
// Reverse the array using reverse() method
function Exercise_15_16(){
    console.log(itCompanies.sort()) //[ "Amazon", "Apple", "Facebook", "Google", "IBM", "Microsoft", "Oracle" ]
    console.log(itCompanies.reverse()) //[ "Oracle", "Microsoft", "IBM", "Google", "Facebook", "Apple", "Amazon" ]
}

//Exercise_15_16()

//==============================================
// Exercise - 17 to 23
/*
17 - Slice out the first 3 companies from the array
18 - Slice out the last 3 companies from the array
19 - Slice out the middle IT company or companies from the array
20 - Remove the first IT company from the array
21 - Remove the middle IT company or companies from the array
22 - Remove the last IT company from the array
23 - Remove all IT companies
*/

function Exercise_17_23(){
    console.log(itCompanies) //[ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ]
    //17
    console.log(itCompanies.slice(0,3))// [ "Facebook", "Google", "Microsoft"]
    //18
    console.log(itCompanies.slice(4,itCompanies.length)) // [ "IBM", "Oracle", "Amazon" ]
    //19 
    console.log((itCompanies.slice(0,3).concat((itCompanies.slice(4,itCompanies.length))))) //[ "Facebook", "Google", "Microsoft", "IBM", "Oracle", "Amazon" ]
    //20
    itCompanies.shift()
    console.log(itCompanies)  //[ "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ]
    //////////////////////////////
    //21
    let companies_2 =[ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ]
    companies_2.splice(3,1)
    console.log(companies_2) // [ "Facebook", "Google", "Microsoft", "IBM", "Oracle", "Amazon" ]
    //22
    let companies_3 =[ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ]
    companies_3.pop()
    console.log(companies_3) //[ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ]
    //23
    console.log(companies_2.splice())
    console.log(companies_3.splice())
}
//Exercise_17_23()