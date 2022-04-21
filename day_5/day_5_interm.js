console.log('Day 5 - intermediate')

//===========================================================
// Exercise - 1
//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file.

//To access all the info, it need be loaded before of this script (REVIEW the html file day_5.html)
//console.log(countries_)
//console.log(webTechs_)


//===========================================================
// Exercise - 2
// First remove all the punctuations and change the string to array and count the number of words in the array
/*
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

the answer :
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

total words = 13
*/

function Exercise_int_2(){
    let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    const pattern_1 = /,/g
    const pattern_2 = /\./g
    let clean_text = text.replace(pattern_1,'')
    let final_clean = clean_text.replace(pattern_2,'')
    console.log(final_clean)// I love teaching and empowering people I teach HTML CSS JS React Python

    console.log(final_clean.split(' ')) //["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
    console.log((final_clean.split(' ')).length) // 13

}

//Exercise_int_2()


//===========================================================
// Exercise - 3

//In the following shopping cart add, remove, edit items
const shoppingCart = ['milk', 'coffee', 'tea', 'honey']
/**
 add 'Meat' in the beginning of your shopping cart if it has not been already added
 add Sugar at the end of you shopping cart if it has not been already added
 remove 'Honey' if you are allergic to honey
 modify Tea to 'Green Tea'
 */

 function add(cart,item){
/*    
    if (item == 'honey'){
        let allergic = confirm('Are you allergic with honey?')
        allergic == true ?  console.log('item not added') : cart.push(item)
        return
    }*/
    if (cart.includes('meat')==false){
        return cart.unshift('meat')
    }
    if(item=='sugar' && cart.includes('sugar')==false){
        return cart.push('sugar')
    }else{
        return cart.push(item)
    }
 }

 function allergic(){
    let search_index = shoppingCart.indexOf('honey')
    let allergic = confirm('Are you allergic with honey?')
    if (search_index=== -1){
        console.log('you dont have honey in the shoppingcart')
    }else{
    allergic === true ? shoppingCart.splice(search_index,1): console.log('shoppingcart not updated')
    }
}

function update_tea(){
    let search_index = shoppingCart.indexOf('tea')
    return shoppingCart[search_index] = 'GreenTea'
}

//===========================================================
// Exercise - 4
//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

function Exercise_int_4(){
    let search_index = countries_.indexOf('Ethiopia')
    if (search_index === -1 ){
        console.log('Not exists')
    }else{
        console.log(countries_[search_index].toUpperCase())
    }
}
//Exercise_int_4()


//===========================================================
// Exercise - 5
//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

function Exercise_int_5(){
    let search_index = webTechs_.includes('Sass')
    if (search_index === false ){
        console.log('Not exists')
        webTechs_.push('Sass')
        console.log(webTechs_)
    }
}
//Exercise_int_5()

//===========================================================
// Exercise - 6
//Concatenate the following two variables and store it in a fullStack variable.
// answer > ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
function Exercise_int_6(){
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    let fullStack = frontEnd.concat(backEnd)
    console.log(fullStack)
}

//Exercise_int_6()