// imediately Invoked Function Expression (IIFE)
(function(){
    let catName = 'muy-muy';
    console.log(catName);
})();

(favCat = function( cat = 'Ginger'){
    console.log(`my fav cat is ${cat}`);
})();
// React type functions

let catName;

const myfunc = () => {
    let name = 'Frank';

    return [
        () => `Miauu ${name}`,
        (newName) => name = newName
    ];
}

const [catSound, newName] = myfunc();

console.log(catSound());
newName('Ginger');
console.log(catSound());


const btn = document.querySelector('.clear');
const title = document.querySelector('h1');
btn.addEventListener('mousemove', runEvent);

function runEvent(e){
    //let txt = title.childNodes[0].textContent;
    let modX = e.offsetX+100;
    let modY = e.offsetY+100;
     title.innerHTML=`<h1> Button says hello at X = ${e.offsetX} and y = ${e.offsetY}`;
     document.body.style.backgroundColor = `rgb(${modX}, ${modY}, 40)`;
    // console.log(`buton clicked ${e.type}`);
    // console.log(`title is ${title.childNodes[0].innerTxt = 'something'}`);
    //title.innerHTML=`<h1> Button says hello and ${e.type}`;

}

