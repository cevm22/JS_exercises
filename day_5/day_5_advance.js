console.log('Day 5 - advance')
//=========================================
// Exercise - 1

//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
/*
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/

function Exercise_adv_1(){
    ages.sort()
    console.log(ages)

    console.log('range of ages >'+(ages[ages.length-1]-ages[0]))

    console.log('median > '+((ages[4] + ages[5])/2))
    let sum =0
    for (i=0; i<ages.length; i++){
        sum=ages[i] + sum
    }

    console.log('average > ' + (sum/10))

    let compare = Math.abs(ages[0] - sum)
    console.log(compare)
    let compare_2 = Math.abs(ages[ages.length-1] - sum)
    console.log(compare_2)

    for (i=0; i<ages.length; i++){
        ages[i]=ages[i]/10
    }
    console.log(ages)
}

//Exercise_adv_1()

//=========================================
// Exercise - 2
//Find the middle country(ies) in the countries array

function Exercise_adv_2(){
    let vec_len = countries_.length
    console.log(vec_len)
    let med = Math.floor(vec_len/2)
    console.log(countries_[med]) //Lesotho

    let vec_1 = countries_.slice(0,96)
    console.log(vec_1)
    let vec_2 = countries_.slice(96,countries_.length)
    console.log(vec_2)
}
//Exercise_adv_2()

//=========================================
// Exercise - 3
//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

function Exercise_adv_3(){
    let vec_len = countries_.length
    let med = Math.floor(vec_len/2)
    if (vec_len % 2 === 0){
        console.log('EVEN')
        let vec_1 = countries_.slice(0,(vec_len-1))
        let vec_2 = countries_.slice((vec_len-1),countries_.length)
        console.log(vec_1)
        console.log(vec_2)
    }else{
        console.log('ODD')
        let vec_3 = countries_.slice(0,(med))
        console.log(vec_3)
        let vec_4 = countries_.slice((med+1),countries_.length)
        console.log(vec_4)
    }
}
//Exercise_adv_3()