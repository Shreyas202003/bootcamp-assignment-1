//Assignment-1::==

//creating empty array
let fruits = [];

//array with elements
fruits= ['apple', 'banana', 'orange']
// console.log(fruits)

//deleting the first element

fruits.splice(0, 1);
// console.log(fruits)

//adding at end

fruits.splice(fruits.length, 0, 'grape')
// console.log(fruits)

//second element updating
fruits.splice(1, 1, 'pear')
console.log(fruits)




//Assignment-2::==


//empty object
let person = {
}

//properties of objects 
person = {
    name: "John",
    age: 30,
    city: "New York"
}
// console.log(person)

//removing age
delete person.age
// console.log(person)

//adding job to person 
person.job = 'Engineer';
// console.log(person)

//updating
person.city = 'San Francisco';
console.log(person)



//Assignment-3::==

//Create an empty array called "cars"
let cars = []

//Adding object to array
cars = [
    {  make: "Toyota", model: "Camry",year: 2018},
    {  make: "Ford", model: "Mustang",year: 1969},
    {  make: "Toyota", model: "Supra MK4",year: 2019}
]
// console.log(cars)

//removing 1st object from cars array
cars.splice(0, 1);
// console.log(cars)

//adding new object
cars.splice(cars.length, 0, {make: "Honda",model: "Civic",year: 2020})
// console.log(cars)

//Updating the 2nd model of car
cars[1].model='Accord';
console.log(cars)

