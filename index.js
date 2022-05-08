// console.log("hello world".toLocaleUpperCase())
// console.log(100)
// console.log(true)

// console.log(typeof {})
// console.log(typeof [])

// console.log(typeof new Date())
// console.log(typeof new RegExp())

// console.log( new Number(100))
// console.log( new String("Hello World"))
// console.log( new Boolean(false))



// Crear Objetos
//  console.log({})
//  const name = "Ryan"
//  const lastName = "Ray"
//  const age = 30

//  const user = {
//      name:"ryan",
//      lastname:"ray",
//      age:30,
//      hobbies: ["read", "programing", "run"],
//      addres: {
//          street:"some street",
//          city:"New York"
//      }
//  }

//  console.log(user)



// Properties / Method
// const user = {
//     name: "Ryan",
//     lastName: "Ray",
//     age: 20,
//     showFullName() {
//         return `${this.name} ${this.lastName}`
//     }
// }

// console.log(user.showFullName())

// const account = {
//     number:"32392864",
//     amount: 100,
//     deposit(quantity){
//         this.amount = this.amount + quantity
//     },
//     withDraw(quantity){
//         this.amount = this.amount - quantity
//     }
// }

// account.deposit(100)
// account.deposit(50)
// console.log(account)

// account.withDraw(130)
// console.log(account)

// const user1 = {
//     name: "Ryan",
//     lastName: "Ray",
//     age: 20,
//     showFullName() {
//         return `${this.name} ${this.lastName}`
//     }
// }


// Constructor de objetos
// function Person (){
//     this.name = ""
//     this.lastName = ""
//     this.age = 0
//     this.showFullName = function(){
//         return `${this.name} ${this.lastName}`
//     }
// }

// const user2 = new Person()
// user2.name = "Joe"
// user2.lastName = "Mcmillan"
// user2.age = 30
// console.log(user2.showFullName())

// const user3 = new Person()
// user3.name = "Cameron"
// user3.lastName = "Howe"
// user1.showFullName()
// console.log(user3.showFullName())


// const user4 = new Person()
// const user5 = new Person()




// const string = new Object("hello world")
// string.test = function (){
//     return this + "test"
// }
// console.log(string.test())

// const user = {
//     name: "Ryna",
//     lastName: "Ray",
//     age: 30,
//     showName(){
//         return this.name
//     }
// }

// console.log(Object.values(user))



// const mankind ={
//     Person: function(){
//         this.name = ""
//         this.lastName = ""
//     } 
// }
// const person = new mankind.Person()
// console.log(person)

// function Person(name, lastName){
//     this.name = name
//     this.lastName = lastName
//     this.displayName = function(){
//         return `${this.name} ${this.lastName}`
//     }
// } 

// const john = new Person("John", "Mcmillan")
// const mario = new Person("Mario","Rossi")
// const maria = new Person("Maria", "Perez")
// const jose = new Person("Jose", "Perez")

// Person.prototype.greet = function(){
//     return `Hello I'm ${this.name}`
// }

// Person.prototype.age = 50


// console.log(john.greet())
// console.log(mario.greet())
// console.log(maria.greet())
// console.log(jose.greet())

// const s = new String("hello world")
// String.prototype.concatTest = function(){
//     return this + "test";
// }

// console.log(s.concatTest())


// class Person{
//     constructor(name, lastName){
//         this.name=name
//         this.lastName=lastName
//     }

//     greet(){
//         return `Hello I'm ${this.name}`
//     }
// }

// const user = new Person("Joe", "Ray")
// const user2 = new Person("Ryan", "Ray")

// console.log(user.greet())
// console.log(user2)


// Asociacion


// const company = {
//     name:"faztTech",
//     employs:[]
// }

// class Person{
//     constructor(name, lastName){
//         this.name=name
//         this.lastName=lastName
//     }
// }

// const john = new Person("John", "Ray")
// const maria = new Person("Maria", "Ray")

// company.employs.push(john)
// company.employs.push(maria)

// maria.parent = john
// console.log(maria)
// console.log(john)
// console.log(company)


// const person = {
//     name:"Ray",
//     lastname:"Ryan",
//     address:{
//         street:"123 baker Street",
//         city:"london",
//         country:"united kingdom"
//     }
// }



// const company = {
//     name: "Fazt Tech",
//     employees:[],
//     sortEmployees(){}
// }

// function Company(name){
//     let employees = []
//     this.name = name

//     this.getEmployees = function(){
//         return employees
//     }

//     this.addEmployees = function(employee){
//         employees.push(employee)
//     }
// }

// const company = new Company("coca cola")
// const company2 = new Company("pepsi")


// console.log(company)
// console.log(company2)

// company.addEmployees({name:"Ryan"})
// company2.addEmployees({name:"Joe"})

// console.log(company.getEmployees())
// console.log(company2.getEmployees())


// function Person(){
//     this.name=""
//     this.lastname=""
// }

// function Programmer(){

//     this.lenguage=""
// }

// Programmer.prototype = new Person()

// console.log(Programmer)
// console.log(Person)

// const user = new Person()
// user.name = "Mariaa"
// user.lastname = "Perez"

// console.log(user)


// const programmer = new Programmer()
// programmer.name = "Joe"
// programmer.lastname= "Ray"
// programmer.lenguage = "Javascript"

// console.log(programmer)


// class Person{
//     constructor(name, lastname){
//         this.name = name
//         this.lastname = lastname
//         this.age = 0
//     }
// }

// class Programmer extends Person{
//     constructor(lenguage,name,lastname){
//         super(name, lastname);
//         this.lenguage = lenguage
//     }
// }

// const programmer = new Programmer("Juan", "Ray", "Python")
// console.log(programmer)

// const person = new Person("Joe", "Mcmillan")
// console.log(person)


// function countItems(x){
//     return x.toString().length
// }


// console.log(countItems(1000000))
// console.log(countItems("HEllo World"))


// function sum(x=0, y=0, z=0){
//     return x + y + z
// }

// console.log(sum(10,20))


// function Stack(){
//     this.item = []

//     this.push = function(item){
//         this.item.push(item)

//     }
// }

// const stack = new Stack()
// stack.push("kjskjcb")

// const stack2 = new Stack()
// stack2.push(2192233)

// console.log(stack)
// console.log(stack2)

class Person {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
    }
}

class Programmer extends Person{
    constructor(lenguage, name, lastname){
        super(name, lastname)
        this.lenguage = lenguage
    }
}

const john = new Person("John", "Ray")
const maria = new Programmer("C#", "Maria", "Ray")

console.log(john)
console.log(maria)


function writeFullName(p){
    console.log(`${p.name} ${p.lastname}`)
}

writeFullName(john)
writeFullName(maria)