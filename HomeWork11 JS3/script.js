
/*
//task sumTo
var i = prompt("введите число", "");

    function sumTo(i) {
    var count = 0;
    for (j=1; j<i; j++) {
        count = j+count;
    }
    return count;
}
document.write(sumTo(i));
*/

/*
//task factor
var f = +prompt("введите число", "");

function factor(f) {
    var count = 1;
    for (var j=1; j<f+1; j++) {
        count = j*count;
    }
    return count;
}
document.write(factor(f));
*/

/*
//task1 Последовательность Фибоначчи
var n = +prompt('введите n-е число', '');
function fib(a,b,n) {
   for (var i=1; i<n-1; i++) {
       var c = a+b;
       a = b;
       b = c;
   }
    return b; //при первом прохождении это уже 3-й член
}
document.write(fib(1,1, n));
*/

/*
//task2 Проверка на СПАМ
function checkSpam() {
    var str = prompt("Введите строку", "").toLowerCase();
    var spam = str.includes("spam");
    var sex = str.includes("sex");
    if (spam||sex) {
        alert("yes");
    }
    else {
        checkSpam();
    }
}
checkSpam();
*/
/*
//task3 Троеточие
var str = prompt("Введите строку", "");
function cutString(str) {
    if (str.length<=20) {
        return str;
    }
    else {
       str = str.substr(0, 20)+'...';
        return str;
    }
}

document.write(cutString(str));
*/
/*
//task4
// return a function that returns n
function always(n) {
    return function () { return n };
}
always();
*/

/*
 //Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if (number%2==0) {
        return "Even";
    }
    else {
        return "Odd"
    }
}

even_or_odd(5);
*/

/*
//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

function greet(name){

    if(name === "Johnny") {
        return "Hello, my love!";
    }
    else {
        return "Hello, " + name + "!";
    }
}
*/

/*
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    if (num<=0) {
        return num;
    }
    else {
        return num*-1;
    }
}
*/

/*
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
    var r = flower1+flower2
    if (r%2==0) {
        return false;
    }
    else {
        return true;
    }
}
*/

/*
//Complete the bool_to_word (Javascript: boolToWord ) method.

function boolToWord( bool ){
    if(bool) {
        return 'Yes'
    }
    else {return 'No'}
}
*/
