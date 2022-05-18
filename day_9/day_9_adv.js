console.log('day_9 - ADVANCE - High Order Functions')

//======================================================
// Exercise 1
//Use the countries information, in the data folder. Sort countries by name, by capital, by population


function Exercise_adv_1(){
    console.log(all_countries)

    let by_capital = all_countries.sort(function(a,b){
        if(a['capital'] < b['capital']) return -1
        if(a['capital'] > b['capital']) return 1
        return 0
    })
    console.log(by_capital)

    let by_less_pop = all_countries.sort(function(a,b){
       return Number(a['population']) - Number(b['population'])

    })
    console.log(by_less_pop)
    
    let by_more_pop = all_countries.sort(function(a,b){
       return Number(b['population']) - Number(a['population'])

    })
    console.log(by_more_pop)
    
}
//Exercise_adv_1()


//======================================================
// Exercise - 2
//Find the 10 most spoken languages:

function Exercise_adv_2(number){
    console.log(all_countries)
    let temporal = []
    let total_lang = []
    all_countries.forEach(function (element)
    {
        // get total languages array
       element.languages.forEach(function(lang){
           //if not exists the language
            if(!total_lang.includes(lang.toLowerCase()) ){
                //add it in new object
                total_lang.push(lang.toLowerCase())
                temporal.push({
                    'languages':lang.toLowerCase(),
                    'count': 1
                })
            }else{
                //if exists add 1 to the counter
                let index = temporal.findIndex((search)=> search.languages == lang.toLowerCase())
                temporal[index].count += 1
            }
        })
        
    })
    //sort the array to higher to lower
    temporal.sort(function(a,b){
       return Number(b['count']) - Number(a['count'])
    })
  
    //give the array length according the input
    let answer = temporal.slice(0,number)
    console.log(answer)
}

//Exercise_adv_2(3)

//======================================================
// Exercise - 3

// Use countries_data.js file create a function which create the ten most populated countries

function Exercise_adv_3(len) {
    console.log(all_countries)

    let answer =[]
    all_countries.forEach(function(element){
        answer.push({
            'country':element.name,
            'population':element.population
        })
    })

    let res = answer.sort(function(a,b){
        return b.population - a.population
    })
    console.log(res.slice(0,len))
}
//Exercise_adv_3(5)

//======================================================
// Exercise - 4

/*
Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
*/
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


function count(vec){
    return vec.length // 25  
}

function sum(vec){
    return vec.reduce((acc,cur)=> acc + cur) // 744
}

function min(vec){
    let answer = vec.sort((a,b)=> a - b)
    return answer[0] // 24
}

function max(vec){
    let answer = vec.sort((a,b)=> b - a)
    return answer[0] // 38
}

function range(vec){
    let _max = max(vec)
    let _min = min(vec)
    return _max - _min // 14
}

function mean(vec){
    let _sum = sum(vec)
    let _count = count(vec)
    return _sum / _count // 29.76
}

function median(vec){
    let len = count(vec)
    if(len % 2 == 0){
        return [vec[len/2], vec[(len/2)-1]]
    }else{
        return vec[Math.floor(len/2)] //29
    } 
}

function mode(vec){
    
    let new_object = []

    vec.forEach(function(element){
        if(!new_object.includes(element)){
            new_object.push({
                'mode':element,
                'count': 1
            })
        }
        let index = new_object.findIndex((obj)=> obj.mode == element)
        new_object[index].count += 1
    })
    //reorder
    new_object.sort((a,b)=> b['count'] - a['count'] )
    return (new_object[0]) //{'mode': 26, 'count': 6}
}

function variance(vec){
    let _mean = mean(vec)
    let dividend = count(vec) 

    let _sum = vec.reduce(function(acc,cur){
        return acc + ((cur - _mean)**2)
    },0)

    let result = _sum / dividend
    return result //17.5424
} 

function standard_dev(vec){
    return Math.sqrt(variance(vec)) // 4.18
}

function freq(vec){
    let temporal = []
    let size = count(vec)

    vec.forEach(function(element){
        if(!temporal.includes(element)){
            temporal.push({
                'age':element,
                'count': 1
            })
        }
            let index = temporal.findIndex((ele)=> ele.age == element)
            temporal[index].count += 1
        
    })

    let answer = []
    temporal.forEach(function(element){
        answer.push({
            'freq': ((element.count/size)),
            'age':element.age
        })
    })
    return answer
}

function vector ({
    arr
}={}) {
    return{
        
        arr,

        _count: function(){
            return count(this.arr)
        },
        _sum: function(){
            return sum(this.arr)
        },
        _min: function(){
            return  min(this.arr)
        },
        _max: function(){
            return  max(this.arr)
        },
        _range: function(){
            return  range(this.arr)
        },
        _mean: function(){
            return  mean(this.arr)
        },
        _median: function(){
            return median(this.arr)
        },
        _mode: function(){
            return mode(this.arr)
        },
        _variance: function(){
            return variance(this.arr)
        },
        _standard_dev: function(){
            return standard_dev(this.arr)
        },
        _freq: function(){
            return freq(this.arr)
        },
        _describe: function(){
            console.log(`Count: ${this._count()}`)
            console.log(`sum: ${this._sum()}`)
            console.log(`min: ${this._min()}`)
            console.log(`max: ${this._max()}`)
            console.log(`range: ${this._range()}`)
            console.log(`mean: ${this._mean()}`)
            console.log(`median: ${this._median()}`)
            console.log(this._mode())
            console.log(`variance: ${this._variance()[0]}`)
            console.log(`standard_dev: ${this._standard_dev()}`)
            console.log( (this._freq()))
        }
    }
}