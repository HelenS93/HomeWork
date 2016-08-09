/**
 * Created by Елена on 09.08.2016.
 */

"use strict";
/*
//task1
var Login = prompt("Введите Ваш Логин", "");

if(Login==null) {
    alert('Canceled');
}
else if(Login=="admin") {
    var Password = prompt("Введите пароль", "");
    if(Password==null) {
        alert('Canceled');
    }
    else if (Password=="passw0rd") {
        alert('Welcome home!');
    }
    else {
        alert('Wrong password');
    }
}
else {
    alert('Access denied');
}
//task2
var a = 1, b = 2;
var g = (a + b >= 3)?'Yep':'Noup!';
alert(g);
*/
//task3
/*
var name = "admin", text;
text = (name == 'admin')?'Hi':(name == 'manager')?'Hello':(name == '')?'No login':'';
alert(text);
*/
//task4
/*
var number;
while (true) {
    number = prompt('Введите число','');
    if (number>100||number==null)
    {break;}
}
*/
//task5
var min = prompt('начало', '');
var max = prompt('конец', '');
for (var i=min; i<max; i++) {
    var count = 0;
    for (var g = 1; g < i+1; g++) {
        if (i%g==0) {
            count++;
        }
    }
    if (count==2) {
        document.write(i+",");
    }
}