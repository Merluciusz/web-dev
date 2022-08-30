sum = Math.pow(8, 2);
console.log(sum);

var myName = 'hello there my name is gabriel';
var replaced = myName.replace('gabriel','emil');

let languages = 'html, java, python, bash';

var myLang = languages.split(',');
console.log(myLang);



var spot = document.getElementById('spot');
spot.innerText=myLang[2];
spot.innerText=replaced;



