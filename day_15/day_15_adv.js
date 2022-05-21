console.warn('DAY 15 - ADVANCE - CLASSES')

/*
Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
*/

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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

class vector {
    
    constructor(
    {
    arr = ages
    }={} ){
    
        this.arr = arr
        }

        _count(){
            return count(this.arr)
        }
        _sum(){
            return sum(this.arr)
        }
        _min(){
            return  min(this.arr)
        }
        _max(){
            return  max(this.arr)
        }
        _range(){
            return  range(this.arr)
        }
        _mean(){
            return  mean(this.arr)
        }
        _median(){
            return median(this.arr)
        }
        _mode(){
            return mode(this.arr)
        }
        _variance(){
            return variance(this.arr)
        }
        _standard_dev(){
            return standard_dev(this.arr)
        }
        _freq(){
            return freq(this.arr)
        }
        _describe(){
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