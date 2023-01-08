
var prNum, tempOut;
prNum = Math.floor((Math.random() * 100)+1);
//tempOut = document.getElementById('temp-out');
//tempOut.innerHTML = prNum;
console.log(prNum);
let guesses = 5;

function guessGame () {

var num, out;
num = document.getElementById('myNum').value;
out = document.getElementById('out');
let difference = prNum-num;
console.log(difference);
//let difference = prNum-num;
//if (Number.isNaN(num))return;
    
guesses = guesses -1;
if (num == prNum) {
    out.innerHTML = 'Поздравляю! Ты угадал задуманное число за 5 попыток'
}
else {
    if (difference < 5 && difference > -5 && guesses < 4) {
    out.innerHTML = 'Не угадал, но теплее!!! Осталось ' + guesses + ' попыток '
}
    else if (guesses < 4) {
    out.innerHTML = 'Не угадал, холоднее… Осталось ' + guesses + ' попыток'
} 
else {
    out.innerHTML = 'Неверно. Попробуй еще раз'
}
}}

function resetGame () {
    guesses=5;
    prNum = Math.floor((Math.random() * 100)+1);
    console.log(prNum);
    out.innerHTML='';
    document.getElementById('myNum').value='';

}