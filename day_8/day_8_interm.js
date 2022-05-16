console.log('dat 8 - Interm')

//=======================================
//OBJECTS INTERMEDIATE

/*
Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
*/
function required_param(param){
  throw new Error(param + " es obligatorio ")
}

function person_Account({
  first_name = required_param('first_name'),
  last_name= required_param('last_name'),
  incomes = [],
  expenses = [],
} = {}) {

  return{
    first_name,
    last_name,
    incomes,
    expenses,

    // methods
    account_info: function(){
      let name = this.first_name
      let lastname = this.last_name
      return `The name is: ${name} ${lastname}`
    },
    add_income: function(item,qty){
      this.incomes.push([item,qty])
    },
    add_expense: function(item,qty){
      this.expenses.push([item,qty])
    },
    total_income: function(){
      let temp = this.incomes
      let total = 0
      for(let i = 0; i<temp.length;i++){
        total += temp[i][1]
      }
      return total
    },
    total_expense: function(){
      let temp = this.expenses
      let total = 0
      for(let i = 0; i<temp.length;i++){
        total += temp[i][1]
      }
      return total
    },
    account_balance: function(){
      let inc = this.total_income()
      let exp = this.total_expense()
      return inc - exp
    },
  }
}

//==================================================================
//  Exercise - 3

/*
Imagine you are getting the above users collection from a MongoDB database. 

a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application


*/

const users_3 = [
  {
      _id: 'abc',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];

const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['abc']
}
];

function signUp(user,pass){
  let temporal
  for (let i=0; i<users_3.length; i++){
      temporal = users_3[i].username.toLowerCase()
      if(temporal == user.toLowerCase()){
        return `The > ${user} < already exists`
      }
  }
  users_3.push({
    _id: (users_3.length + 1),
    username: user,
    email: user+'@mail.com',
    password:pass,
    createdAt: Date.now(),
    isLoggedIn: true
  })
}

function signIn(user){

  for (let i=0; i<users_3.length; i++){
    temporal = users_3[i].username.toLowerCase()
    if(temporal == user.toLowerCase()){
      users_3[i].isLoggedIn = true
      return `Welcome > ${user} <`
    }
}
  return 'Please SIGNUP'
}

/*
The products array has three elements and each of them has six properties.
  a. Create a function called rateProduct which rates the product 
  b. Create a function called averageRating which calculate the average rating of a product

Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
*/

function rateProduct(product,id,rate){
  for (let i=0; i<products.length; i++){
    temporal = products[i].name.toLowerCase()
    if(temporal == product.toLowerCase()){
      products[i].ratings.push({userId: id, rate:rate})
      return 
    }
}
}

function averageRating(product){
  let temporal
  let rate = 0
  let add = 0
  for (let i=0; i<products.length; i++){
    temporal = products[i].name.toLowerCase()

    if(temporal == product.toLowerCase()){
      for(let x = 0; x < products[i].ratings.length; x++){
        add += (products[i].ratings[x].rate)
      }
       return add / products[i].ratings.length
    }
}
}


function likeProduct(product,userId){

  for (let i = 0; i<products.length; i++){
    temporal = products[i].name.toLowerCase()

    if(temporal == product.toLowerCase()){
      const test = products[i].likes.indexOf(userId)
      if(test > -1){
        products[i].likes.splice(test,1)
        return products[i].likes
      }else{
        products[i].likes.push(userId)
        return products[i].likes
      }
    }
  }
}
