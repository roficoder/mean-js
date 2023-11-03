// DOM CODE
// console.log(document.getElementById("name"));

let elementName = document.getElementById("name");


console.log(elementName);



// OBJECT CODE
let carName = "Ferari"
let carModel = 2023;
let carColor = 'red';

let car2Name = "Ferari"
let carwModel = 2023;
let carwColor = 'red';

// YOU CAN SEE ABOVE THAT WE HAVE TO CREATE AGAIN AND AGAIN VARIABLES WHICH IS NOT A GOOD APPROACH
// BELOW WE WILL CREATE SOME OBJECTS

// console.log("CarModel")

let car = {
    color: 'red',
    weight: '700kg',
    model: 2023,
    brake: function (){
        console.log("brake");
    },
    infoPrinter: function (){
        console.log(this.model, this.weight, this.color);
    },
    customPrinter: function (value){
        console.log(value);
    }
}

let student = {
    name: "Raouf",
    rollNo: 10,
    course: "BSCS",
    tutor: "HOD",
    institute: "KFC",
    study: function (){
        console.log(this.name + ' study in ' + this.institute + ' and he is doing ' + this.course + ' having roll no ' + this.rollNo);
    }
}

let meanCourse = {

}

function brake(){
    console.log("Brake");
}

// brake()

// console.log(typeof car2Name);
// console.log(typeof carModel);
console.log('____');
// console.log(car);
// console.log(typeof car);

// console.log(car.weight);
// car.brake()
// car.infoPrinter()
car.customPrinter("Test")


// console.log(student);

// student.study()