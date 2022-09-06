document.getElementById('button1').addEventListener('click', getText);


function getText(e){
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
        return response.text();
    }).then(function(data){
        document.getElementById('output').innerHTML=`<p>${data}</p>`;
        console.log(data);

    });

    // const post = {
    //     someName:'',
    //     id:'',
    // }

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => 
//     // post.someName=json.title,
//     // post.id=json.id;
//      console.log(json)
//   ).catch(err => console.log(err));

}