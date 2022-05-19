console.log('Day - 10 SET and MAP')

//=====================================================
// Exercise 1 to 5

/*
1 - create an empty set
2 - Create a set containing 0 to 10 using loop
3 - Remove an element from a set
4 - Clear a set
5 - Create a set of 5 string elements from array
*/

function Exercise_12345(){
    // Exercise 1
    let empty = new Set()
    console.log(empty)

    // Exercise 2
    for (let i=0; i < 11; i++){
        empty.add(i)
    }
    console.log(empty)

    // Exercise 3
    empty.delete(5) //deleting 5
    console.log(empty)

    // Exercise 4
    empty.clear() //clearing the variable
    console.log(empty)

    // Exercise 5
    let vector = ['a','b','c','d','e']
    let new_set = new Set(vector)
    console.log(new_set)
}
//Exercise_12345()

//===================================================
// Exercise - 6

function Exercise_6(){
    console.log(all_countries)

    let answer = new Map()

    all_countries.forEach(function(element){
        answer.set(element.name, element.name.length)
    })
    console.log(answer)
}
//Exercise_6()

//===================================================
// Exercise - INTERMEDIATE - 1
/*
Find a union b
Find a intersection b
*/

function Exercise_int_1(){
    const a = [4, 5, 8, 9]
    const b = [3, 4, 5, 7]

    //Exercise 1
    let first = new Set(a)
    let second = new Set(b)
    let third = [...first,...second]

    let last = new Set(third)
    console.log(last)

    //Exercise 2
    let B = new Set(b)
    
    let c = a.filter((number)=> B.has(number))
    //convert to SET
    let C = new Set(c)
    console.log(C)

}
//Exercise_int_1()
//===================================================
// Exercise advance - 1

// How many languages are there in the countries object file.

function Exercise_adv_12(number){
    //console.log(all_countries)

    let test = new Set()
    let answer = new Map()

    all_countries.forEach(function(element){

        element.languages.forEach(function(lan){ 
            test.add(lan.toLowerCase())

            if(answer.has(lan.toLowerCase())){
                answer.set(lan.toLowerCase(), answer.get(lan.toLowerCase())+1)
            }else{
                answer.set(lan.toLowerCase(), 1)
            }

        })
        
    })

    //exercise 1
    console.log(test)
    console.log(answer)

    //from map to an array
    const arr = Array.from(answer)

    arr.sort((a,b)=> b[1] - a[1])
    //console.log(arr) // all countries ordered
    
    //exercise 2
    return arr.slice(0,number)
}

//console.log(Exercise_adv_12(10))