/**
 * Created by Елена on 06.08.2016.
 */
"use strict";
var date = new Date();
var thisYear = date.getFullYear().toString();
var year = prompt("Какой сейчас год?", thisYear);

if(year==thisYear) {
    alert('Это правда!');
}
else {
    alert('Нет, сейчас не этот год');
}

var number =parseInt(prompt("Введите любое целое число?", ''));
if(number>0) {
    alert('1');
}
else if(number<0) {
    alert('-1');
}
else if(number==0) {
    alert('0');
}
else {
    alert('Ошибка');
}
