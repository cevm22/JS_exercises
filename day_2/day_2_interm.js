console.log('Day_2 exercise - Intermediate')

//=========================================================
// Exercise - 1
// Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

const phrase_quote = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
//console.log(phrase_quote)

//=========================================================
// Exercise - 2
//Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

const phrase_quote_2="Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."
//console.log(phrase_quote_2)

//=========================================================
// Exercise - 3
//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

function exercise_3(){
    const proof_type='10'

    //JS interprate that is the same
    console.log(proof_type == 10) // R-> True
    //but here is trying to compare strictly the same, and it return false because is not equal string and decimal
    console.log(proof_type === 10) // R-> False
    //to get True we need parse it to a number
    const change_to_num = parseInt(proof_type)
    console.log(change_to_num === 10 )// R-> False
}
//exercise_3()

//=========================================================
// Exercise - 4
//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

function exercise_4(){
    const proof_type='9.8'

    console.log(proof_type == 10) // R-> False

    //Parse it first to float and then round it up
    const round_up= Math.round(parseFloat(proof_type))
    console.log(round_up ===10) // R-> True
}
//exercise_4()

//=========================================================
// Exercise - 5
//Check if 'on' is found in both python and jargon

function exercise_5(){
    const word_1='python'
    const word_2='jargon'

    let search_1= word_1.includes('on')//R-> True
    let search_2= word_2.includes('on')//R-> True

    console.log(search_1 === search_2)// R-> True

}

//=========================================================
// Exercise - 6
//I hope this course is not full of jargon. Check if jargon is in the sentence.

function exercise_6(){
    const phrase= 'I hope this course is not full of jargon.'
    console.log(phrase.includes('jargon'))//R-> True
}

//=========================================================
// Exercise - 7, 8, 9
//Generate a random number between 0 and 100 inclusively.
//Generate a random number between 50 and 100 inclusively.
//Generate a random number between 0 and 255 inclusively.
//NOTE- Math.random() generates random between 0 to 0.999999....

function exercise_789(){
    //make a random, then multiply it to 101 to generete 100.998
    let random_0_to_100 = parseInt(Math.random()*101)
    //then we round down with Math.floor() to get the number 100
    console.log(Math.floor(random_0_to_100))

    function getRandomIntInclusive(min, max) {
        //round UP
        min = Math.ceil(min);
        max = Math.floor(max);
        //Generates random btn 0 to 0.999... then multiply by the difference off max and min and add 1 to include the max, after this you need move the offset with adding the min valu and finally round down to get it
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }

    let random_50_to_100= getRandomIntInclusive(50,100)
    console.log(random_50_to_100)
}
//exercise_789()

//=========================================================
// Exercise - 10
//Access the 'JavaScript' string characters using a random number.

function exercise_10(){
    const word = 'JavaScript'
    const word_len= word.length

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let answer=  Math.floor(Math.random() * (max - min + 1) + min); 
        console.log('random num > ' + answer)
        return answer
      }
    
    let word_to_array = word.split('')
    console.log(word_to_array)

    console.log(word_to_array[getRandomIntInclusive(0,(word_len-1))]) //R-> random letter

}

//exercise_10()

//=========================================================
// Exercise - 11
// Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

function exercise_11(){
    let array_1 = '1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125'
    console.log(array_1)
}

//=========================================================
// Exercise - 11
//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

function  exercise_12(){
    let phrase ='You cannot end a sentence with because because because is a conjunction'
    const first_because= phrase.indexOf('because')
    console.log(first_because)//R-> 31
    const slice_words = 'because because because'
    console.log(slice_words.length)//R-> 23
    console.log(phrase.slice(first_because,first_because+slice_words.length))
}
//exercise_12()