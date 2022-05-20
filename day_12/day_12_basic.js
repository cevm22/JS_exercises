console.log('Day 12 - Basic - RegExp')

//=========================================
// Exercise 1

// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.

function Exercise_1(){
    const phrase = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."

    const pattern = /\d+/g
    let vec = phrase.match(pattern)
    let vec_to_num = []
    vec.forEach(function(element){vec_to_num.push(Number(element))})
    console.log(vec_to_num)
    let last = vec_to_num.reduce(function(acc,cur){return acc + cur},0)
    console.log(last)
    
}
//Exercise_1()

//=========================================
// Exercise 2

//THIS IS UNCLEAR TO SOLVE IT
//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

function Exercise_2(){
    
    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
    distance = 12

}


//=========================================
// Exercise Advance - 1

// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

function Exercise_adv_1(number){
    const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

    const pattern = /\./gi
    let vector = paragraph.replace(pattern,'').split(' ')
    console.log(vector)

    let new_map = new Map()

    vector.forEach(function(element){
        if(new_map.has(element)){
            new_map.set(element, new_map.get(element)+1)
        }else{
            new_map.set(element,1)
        }
    })
    console.log(new_map)

    let answer = []
    let temporal = []

    vector.forEach(function(words){
        
        if(!temporal.includes(words)){
            temporal.push(words)
            answer.push({
                'word': words,
                'count': 1
            })
        }else{
            let index = answer.findIndex((search)=> search.word == words)
            answer[index].count += 1
        }
        
    })
    answer.sort(function(a,b){return b['count'] - a['count']})

    console.log(answer.slice(0,number))

}
//Exercise_adv_1(3)

function Exercise_adv_2(number){
    const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

    // this character > (^) means Negation, so in the following pattern, it says all characters except alphabet and dot
    //also (g) for all the sentence and (i) ignoring the capital letters
    const pattern = /[^a-z' ']/gi
    let clear= sentence.replace(pattern,'')
    console.log(clear)


    let to_arr = clear.split(' ')
    console.log(to_arr)

    let temporal = []
    let answer = []

    to_arr.forEach(function(element){
        if(!temporal.includes(element)){
            temporal.push(element)
            answer.push({
                'word':element,
                'count':1
            })
        }else{
            let index = answer.findIndex((x)=>x.word==element)
            answer[index].count += 1
        }
    })
    answer.sort((a,b)=> b['count']-a['count'])
    
    console.log(answer.slice(0,number))
}
//Exercise_adv_2(5)