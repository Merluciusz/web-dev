/**
 * EasyHTTP library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author javascript course
 * @license MIT
 *
 */

console.log("easyhttp2 script");

class EasyHTTP {

  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }// get


post(url, data){
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }// post

  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
      });
    }// put

    delete(url){
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'DELETE',
          headers:{
            'Content-type':'application/json'
          }
        })
        .then(res => res.json())
            .then(() => resolve('resource deleted'))
            .catch(err => reject(err));
        });
      }// DELETE


}// class

