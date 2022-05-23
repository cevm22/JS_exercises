console.warn('DAY 17 - WEB STORAGE - LOCALSTORAGE')

/*
SESSION STORAGE: Is only available within the browser tab or window sessions. The data persist until the Tab or browser closes and it clear all the data.
LOCAL STORAGE: The data stored with no expiration in the browser even if the browser or the tab was closed.

Web storage data is not available between different browsers.

======================== 
Some use case of Web Storages are
========================
- store data temporarily
- saving products that the user places in his shopping cart
- data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
- can be used offline completely using localStorage
- Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
- can be used for user authentication method

========================
Web Storage objects:
========================
// ALL THE DATA NEED BE STORED IN STRING, IS BETTER TO USE A JSON FORMAT
localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
*/


//=====================================================================
// Store you first name, last name, age, country, city in your browser localStorage.


let first_Name = 'cristian'
localStorage.setItem('name',first_Name)

function Exercise_1(){
    let last_name = 'valencia'
    let country = 'Mexico' 
    localStorage.setItem('lastname',last_name)
    localStorage.setItem('country',country)

}
//Exercise_1()

//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

function required_param(param){
    throw new Error(param + " es obligatorio ")
  }

class student{
    constructor({
        name = required_param('name'),
        lastname = required_param('lastname'),
        age = required_param('age'),
        skills = required_param('skills in array format')

    }={})
    {
        
        this.name = name,
        this.lastname = lastname,
        this.age = age,
        this.skills = skills
        
    }
}
let  ana = new student({name:'ana', lastname:'apellido', age:'25', skills:['java', 'mongoDB', 'javascript']}) 
let to_string = JSON.stringify(ana,null,0)
localStorage.setItem('ana',to_string)