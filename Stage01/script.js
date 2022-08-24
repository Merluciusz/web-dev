(function () {
  const word = "JavaScript steps to success";
  console.log(word);
})();

console.dir(document);

var a = document.getElementById("newText").value;
var output = document.getElementById("output");

var fourthElement;
var all;

var container = document.getElementById('container');
var yellow = document.querySelector('.yellow');
yellow.addEventListener("click", onSomethingClicked);


showListContent();

//createElement();

function upText() {
  var b = document.getElementById("newText").value;
  output.innerText = document.getElementById("newText").value;
  changeList(b);
}

function changeList(name) {
  var items = document.getElementsByTagName("li");
  console.log(a);
  for (var x = 0; x < items.length; x++) {
    //  items[x].innerText = items[x].innerText + name;
    items[x].innerText = "Items " + (x + 1);
  }
}

function createElement() {
  fourthElement = document.createElement("div");
  fourthElement.innerHTML = "Fourth div created in Js";
  all = document.querySelectorAll("div.yellow");
  console.log("in the createElement method");
  console.log(all[0].appendChild(fourthElement));
  all[0].appendChild(fourthElement);
}

function removeElement() {
  all[0].removeChild(all[0].childNodes[0]);
}

function onSomethingClicked() {
  console.log("something was clicked: " + yellow.innerText);
}

function showListContent() {
  var items = document.getElementsByTagName('li');
  console.log(items);
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    item.addEventListener('click', function () {
      console.log(this.innerHTML);
      if(this.style.backgroundColor=="red"){
        this.style.backgroundColor=="white";
      }else{ this.style.backgroundColor=="red";}
    })
  }
 
}
// var shoppingList = ["milk","Bacon","Eggs"];
// console.log(shoppingList[(shoppingList.length -1)])
//
// // var number = multiply(6,3);
// // console.log(number);
//
// printStringInfo("JavaScript steps to success");
//
// addToList(shoppingList,"Butter");
//
//
// function multiply(num1, num2){
//     var num3 = num1*num2;
//     console.log(num1+" * "+num2+" = "+num3);
//     return num3;
// }
//
// function addToList(array,value){
//     console.log("the value to be added is "+value);
//     array.push(value);
//     console.log(array);
// }
//
// function printStringInfo(word){
//     console.log("the length is "+word.length);
//     console.log("index of 'to' "+word.indexOf("to"));
// }
