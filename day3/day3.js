
var counter = 10;

function evenOddChecker(num) {
    if(num % 2 == 0){
        console.log("Number is even");
    }
    if(num % 2 == 1){
        console.log("Number is odd");
    }
}

// Check for Adult
function isAdult(age){
    if(age > 18){
        console.log("You are adult");
    }
    if(age < 18){
        console.log("You are not adult");
    }
    if(age == 18){
        console.log("You are 18");
    }
}

// IF ELSE
function evenOddWithIfElse(num){
    if(num % 2 == 0){
        console.log("The number is even");
    }else{
        console.log("The number is odd");
    }
}

function isAdultWithIfElse(age){
    if(age <= 18){
        console.log("Not adult");
    }else{
        console.log("Adult");
    }
}

// isAdultWithIfElse(19)
// isAdultWithIfElse(16)
// isAdultWithIfElse(18)

function notAdult(age){
    if(age != 18){
        console.log("Notadult");
    }
}

// notAdult(18)


// == VS ===
var num1 = 2;
var num2 = '5';

// if(num1 === num2){
//     console.log("They are equal");
// }

// LOGICAL OPERATORS
// AND, OR, NOT
// if(num1 == 2 && num2 == '2'){
//     console.log("I am learning AND Logical Operators");
// }

// OR OPERATORS
// if(num1 == 3 || num2 == '2'){
//     console.log("I am learning OR Logical Operators");
// }


// IF ELSE IF
// var age = 18;
// if(age < 18){
//     console.log("not adult");
// }else if(age > 18){
//     console.log("Adult");
// }else{
//     console.log("You are 18");
// }

var investment = 2050;

if(investment >= 0 && investment <= 1000){
    console.log("You are a bronze member");
}else if(investment >= 1001 && investment <= 2000){
    console.log("You are a silver member");
}else{
    console.log("You are a gold member");
}