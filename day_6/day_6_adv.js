console.log('Day 6 - advance')

//===========================================================
// Exercise - 1, 2, 3

//Copy countries array(Avoid mutation)

function Exercise_adv_123(){
    //console.log(countries)
    let vec =[] 
    for(let i = 0; i < countries.length; i++){
        vec.push(countries[i])
    }
    console.log(vec)

    let sorted = vec.reverse()
    console.log(sorted)
}

//Exercise_adv_123()


//===========================================================
// Exercise - 4

//Extract all the countries contain the word 'land' from the countries array and print it as array

function Exercise_adv_4(){
    let res = []
    let pattern = /land/gi
    let temporal
    for(let i = 0; i < countries_.length; i++ ){
        temporal = countries_[i].match(pattern)
        if (temporal){
            res.push(countries_[i])
        }
    }
    console.log(res)//Array(11) [ "Finland", "Iceland", "Ireland", "Marshall Islands", "Netherlands", "New Zealand", "Poland", "Solomon Islands", "Swaziland", "Switzerland", … ]
}

//Exercise_adv_4()

//===========================================================
// Exercise - 5

//Find the country containing the hightest number of characters in the countries array

function Exercise_adv_5(){
    let temporal = 0
    let max = 0
    for(let i = 0; i < countries_.length; i++){
        
        if (countries_[i].length > max){
            temporal = countries_[i]
            max = countries_[i].length
        }
    }
    console.log(temporal)
    console.log(max)
    
}

//Exercise_adv_5()

//===========================================================
// Exercise - 6

//Find the country containing the hightest number of characters in the countries array

function Exercise_adv_6(){
    let res = []
    for(let i = 0; i < countries_.length; i++){
        
        if (countries_[i].length == 4){
            res.push(countries_[i]) //Array(10) [ "Chad", "Cuba", "Fiji", "Iran", "Iraq", "Laos", "Mali", "Oman", "Peru", "Togo" ]
        }
    }
    console.log(res)
    
}

//Exercise_adv_6()

//===========================================================
// Exercise - 7

//Find the country containing the hightest number of characters in the countries array

function Exercise_adv_7(){
    let temporal 
    let res = []
    for(let i = 0; i < countries_.length; i++){
        temporal = countries_[i].split(' ')
        if (temporal.length > 1){
            res.push(temporal)
        }
    }
    console.log(res)
    
}

//Exercise_adv_7()

//===========================================================
// Exercise - 8

//Copy countries array(Avoid mutation)

function Exercise_adv_8(){

    let vec =[] 
    for(let i = 0; i < countries_.length; i++){
        vec.push(countries_[i].toUpperCase())
    }
    let sorted = vec.reverse()
    console.log(sorted)
}

//Exercise_adv_8()