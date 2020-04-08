const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/fruitDB', { useNewUrlParser: true, useUnifiedTopology: true });

//fruit schema - a blueprint for the object that will be saved in the database

//schema before validation
// const fruitSchema = new mongoose.Schema({
//     name: String, //a fruit object will have a name property of String type
//     rating: Number, //rating as a Number
//     review: String //review as some text
// });

const fruitSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: [true, "Error: no name specified" ]//the property name must not be empty
    },
       rating: {
           type: Number, //must be a number
           min: 1, //minimum value allowed 1
           max: 10 //maximum value allowed 10
       }, 
       review: String 
   });
   

//use the schema to create a Mongoose model
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 10,
    review: "Sweet and crunchy"
});
 
//fruit.save();
/*
const orange = new Fruit({
    name: "orange",
    rating: 8
});
 
orange.save();

Fruit.update({_id: "5e8db2394117e94654b03be3"}, {review: "Juicy fruit"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
});
*/

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number    
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    firstName: 'John',
    lastName: 'Doe',
    age: 29
});

/*
Person.updateOne({_id: "5e8d9c5b20dfd55388407cb4"}, {age: 30}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
});

//person.save();


const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "Soft texture"
});
 
const lemon = new Fruit({
    name: "Lemon",
    rating: 5,
    review: "Sour as hell"
});

//to add all the fruit in bulk
Fruit.insertMany([banana, lemon], (error)=> {
    if(error){
        console.log(err);
    } else {
        console.log("Fruit successfully added to the fruitDB");
    }
})


const person2 = new Person({
    firstName: 'Vlad',
    lastName: 'V',
    age: 21
});
 
const person3 = new Person({
    firstName: 'Henry',
    lastName: 'Morgan',
    age: 40
});

//to add all the fruit in bulk
Person.insertMany([person2, person3], (error)=> {
    if(error){
        console.log(err);
    } else {
        console.log("Person successfully added to the fruitDB");
    }
})
*/

/*
Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        console.log(fruits);
    }
});


Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        //console.log(fruits);
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
 
    }
});

Person.find(function(error, people) {
    if(error){
        console.log(error);
    } else {
        console.log(people);
    }
});


Person.find(function(error, people) {
    if(error){
        console.log(error);
    } else {
        people.forEach(person => {
            console.log(person.firstName);
        });
 
    }
});


Fruit.deleteMany({name: "Banana"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item successfully deleted.");
    }
});


Fruit.deleteMany({name: "orange"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item successfully deleted.");
    }
});
*/

app.listen(3000, ()=>{
    console.log("Server is Running on Port 3000");
});
