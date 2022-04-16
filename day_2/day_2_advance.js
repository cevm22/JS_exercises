console.log('Day_2 exercise - Advance')

//========================================================
// Exercise - 13
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

function exercise_13(){
    const phrase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
    const pattern = /love/gi
    let qty_love=phrase.match(pattern)
    console.log(qty_love.length) //R-> 3
}
//exercise_13()

//========================================================
// Exercise - 14
//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because because is a conjunction'

function exercise_14(){
    const phrase = 'You cannot end a sentence with because because because because is a conjunction'
    const pattern = /because/gi
    let qty_love=phrase.match(pattern)
    console.log(qty_love.length) //R-> 4
}

//exercise_14()

//========================================================
// Exercise - 15
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
function exercise_15(){
    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

    var mapObj = {
        '%':'',
        '@':'',
        '#':'',
        '&':'',
        ';':''
     
     };
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
    let clean_1 = sentence.replace(re,function matched(matched){
        return mapObj[matched]
    });
    console.log(clean_1)

    console.log(clean_1.replace(/\$/gi,''))
}
//exercise_15()


//========================================================
// Exercise - 16
//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

function exercise_16(){
    const phrase = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
    let numbers= phrase.match(/\d+/g) //R->[ "5000", "10000", "15000" ]

    //change str to int number and do annual equation
    let salary= (parseInt(numbers[0]) * 12) + parseInt(numbers[1]) + (parseInt(numbers[2]) *12)

    console.log(numbers)
    console.log('Annual income is > $'+salary)
}

//exercise_16()