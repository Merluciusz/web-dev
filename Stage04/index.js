
var varNum = 100;
let letNum = 250;
const constNum = 500;

function changeThem(){
// var varNum = varNum + varNum;
// console.log(`varNum is: ${varNum} \n`);
let letNum = 0;
letNum = letNum + 2500;//this.letNum + this.letNum;

console.log(`letNum is: ${letNum} \n`);

//const constNum = 1000;
//console.log(`constNum is: ${constNum} \n`);
///console.log('scope: '+this);
}

changeThem();

var spot = document.getElementById('spot');
spot.innerText=`varNum is: ${varNum} \n letNum: ${letNum} \n constNum is: ${constNum} \n`;




