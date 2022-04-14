console.log('Day_2 exercise - Basic')
//Exercise LVL 1 - basic

// Exercise - 1
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'. 

const challenge = '30 Days Of JavaScript';
//=======================================================
//Exercise - 2
// Print the string on the browser console using console.log()

// console.log(challenge)
//=======================================================
//Exercise - 3
// Print the length of the string on the browser console using console.log()

//console.log(challenge.length) // R-> 21

//=======================================================
//Exercise - 4
// Change all the string characters to capital letters using toUpperCase() method

const to_uppercase = challenge.toUpperCase()
//console.log(to_uppercase)
// in one line
//console.log(challenge.toUpperCase())

//=======================================================
//Exercise - 5
// Change all the string characters to lowercase letters using toLowerCase() method

const to_lowercase = challenge.toLowerCase()
//console.log(to_lowercase)

//=======================================================
//Exercise - 6
// Cut (slice) out the first word of the string using substr() or substring() method

//.substring(inicial character, end character) *end character is NOT included
const slice_first_word = challenge.substring(0,4) // the character in the position num 4 is 'a' but it shows until 'D'
//console.log(slice_first_word) // R-> 30 D

//=======================================================
//Exercise - 7
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

//in this case we only use the starting STR position, because we only want the last word and it takes by default the las position
const slice_phrase = challenge.substring(10)
//console.log(slice_phrase) // R-> JavaScript

//=======================================================
//Exercise - 8
//Check if the string contains a word Script using includes() method

// Note: is sensitive with CAPITAL letters
//it returns TRUE or FALSE.
const contains_word = challenge.includes('Script')
//console.log(contains_word) // R-> true

//=======================================================
//Exercise - 9
//Split the string into an array using split() method
// Exercise - 10
// Split the string 30 Days Of JavaScript at the space using split() method

//SPLIT works with a 'spacer'. variable.split('spacer'), if it is empty, it splits by each char
//split each character in a single array
const phrase_array = challenge.split('') //R->  [ "3", "0", " ", "D", "a", "y", "s", " ", "O", "f", … ]
//console.log(phrase_array)
//split each word in a single array
const phrase_by_word = challenge.split(' ')
//console.log(phrase_by_word) // R-> [ "30", "Days", "Of", "JavaScript" ]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
//splits usiny ONLY comma
//console.log(countries.split(',')) //R-> [ "Finland", " Sweden", " Norway", " Denmark", " and Iceland" ]
//split comma with space after
//console.log(countries.split(', ')) //R-> [ "Finland", "Sweden", "Norway", "Denmark", "and Iceland" ]

//=======================================================
//Exercise - 11
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const company_words = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
//console.log(company_words.split(', ')) //R->  [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ]

//=======================================================
//Exercise - 12
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

//Sensitive with CAPITAL letters
const replace_js_python_word = challenge.replace('JavaScript','Python');
//console.log(replace_js_python_word);

//=======================================================
//Exercise - 13
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

//console.log(challenge.charAt(15)) //R-> 'S'

//=======================================================
//Exercise - 14
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

//string.charCodeAt(index) it returns in ASCII number
//console.log(challenge.charCodeAt(11)) //R-> 74

//=======================================================
//Exercise - 15
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

//returns de first word and the first CHAR position in this case there are  3 'a' character.
//console.log(challenge.indexOf('a')) //R-> 4
//console.log(challenge.indexOf('Days')) //R-> 3
//returns -1 if it doesnt exists
//console.log(challenge.indexOf('days')) //R-> -1

//=======================================================
//Exercise - 16
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

//this is the oposite of .indexof, it returns the last position of character or word in phrase and returns -1 if not exists
//console.log(challenge.lastIndexOf('a')) //R-> 14
//console.log(challenge.lastIndexOf('JavaScript')) //R-> 11

//=======================================================
//Exercise - 17
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const phrase_index = 'You cannot end a sentence with because because because is a conjunction'

//console.log(phrase_index.indexOf('because')) //R-> 31

//=======================================================
//Exercise - 18
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//console.log(phrase_index.lastIndexOf('because')) //R-> 47

//=======================================================
//Exercise - 19
//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//console.log(phrase_index.search('because'))//R-> 31

//=======================================================
//Exercise - 20
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

const remove_white_space = ' 30 Days Of JavaScript '
//this remove spaces at beginning and the end of a string
//console.log(remove_white_space.trim(''))

//=======================================================
//Exercise - 21
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true

//sensitive with CAPITAL letters
//is TRUE because the sentence starts with '30' in string
//console.log(challenge.startsWith('30')) // R-> True

//=======================================================
//Exercise - 22
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
//sensitive with CAPITAL letters
//console.log(challenge.endsWith('JavaScript')) // R-> True
//console.log(challenge.endsWith('javaScript')) // R-> False


//=======================================================
//Exercise - 23
//Use match() method to find all the a’s in 30 Days Of JavaScript

//string.match(pattern) is used to find some kind of words with pattern starts and ends with */* 
//after first slash (/) use a expresion you want to find
// then after the last slash (/) you can add a flag
//***Flags after first slash (/):
//g: means to search in whole text
//i: means is insensitive  

const testig_text= '30 DAys Of JavaScript'
let pattern_a= /a/g

//let pattern_a= /a/gi
//console.log(testig_text.match(pattern_a)) //R-> [ "A", "a", "a" ]

//let pattern_a= /a/g
//console.log(testig_text.match(pattern_a)) //R-> ["a", "a" ]

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character (\) means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

//console.log(txt.match(regEx))  // R-> [ "2019" ]
//console.log(txt.match(/\d+/g)) // R-> ["2019", "30", "2020"]

//=======================================================
//Exercise - 24
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

const string_1 = '30 Days of'
const string_2 = 'JavaScript'

//console.log(string_1.concat(' ', string_2))  //R-> 30 Days Of JavaScript

//=======================================================
//Exercise - 25
// Use repeat() method to print 30 Days Of JavaScript 2 times

//console.log(challenge.repeat(2)) //R--> 30 Days Of JavaScript30 Days Of JavaScript