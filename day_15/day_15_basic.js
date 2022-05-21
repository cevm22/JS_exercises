console.warn('DAY 15 - CLASSES')

//===============================================
// Excercise - 1

//Create an Animal class. The class will have name, age, color, legs properties and create different methods
function required_param(param){
    throw new Error(param + " es obligatorio ")
  }

class Animal{
    constructor(
        {
        name = required_param('name'),
        age = 0,
        color = required_param('color'),
        legs = required_param('legs')
        } = {}
    ){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get_Full_Name(){
        return 'It name is: ' + this.name + ' '
    }
    get_color(){
        return this.color
    }
    new_color (new_color){
        this.color=new_color
    }

}

//Create a Dog and Cat child class from the Animal Class.
class Cat extends Animal{
    constructor(
        {
            name,
            age,
            color,
            legs,
            gender=required_param('gender')
        }={})
        {
        super({name,age,color,legs})
        this.gender = gender
        }

    type(){
        console.log('Its a Cat and ' + this.get_Full_Name())
    }


}

class Dog extends Animal{
    type(){
        console.log('Its a Dog and ' + this.get_Full_Name())
    }
}

//Override the method you create in Animal class