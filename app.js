

// // Q2
// var num1 = Number(prompt("enter first number"))
// var num2 = Number(prompt("enter second number"))

// if(num1 > num2){
//     alert(num1 + " is larger")
// }else if(num2 > num1){
//     alert(num2 + " is larger")
// }else{
//     alert("both numbers are equal")
// }


// // Q3
// var number = Number(prompt("enter a number"))

// if(number > 0){
//     alert(number + " is positive")
// }else if(number < 0){
//     alert(number + " is negative")
// }else{
//     alert("its zero")
// }


// // Q4
// var chr = prompt("enter a character")

// if(chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u"){
//     alert("true")
// }else{
//     alert("false")
// }


// Q5
// var correctPass = "pakistan123"
// var userPass = prompt("enter your password")

// if(!userPass){
//     alert("Please enter your password")
// }else if(userPass == correctPass){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect password")
// }


// Q6
// var greeting;
// var hour = 13;

// if(hour < 18){
//     greeting = "Good day"
// }else{
//     greeting = "Good evening"
// }

// alert(greeting)


// Q7
var time = Number(prompt("enter time in 24 hr format"))

if(time >= 0 && time < 1200){
    alert("Good morning")
}else if(time >= 1200 && time < 1700){
    alert("Good afternoon")
}else if(time >= 1700 && time < 2100){
    alert("Good evening")
}else if(time >= 2100 && time <= 2359){
    alert("Good night")
}

