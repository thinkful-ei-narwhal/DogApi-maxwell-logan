'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
//This is going to populate the HTML for up to 50 images. 

function displayResults(responseJson) {
  /*
  `<img src="${responseJson.message[1]}" class="results-img"/>`
  forEach() element in responseJson.message array, I want to create a unique img tag.
  responseJson.message.forEach(element => console.log("Image x3"))
  
  
  
  
  
  */
  console.log(responseJson);
  $('.results').removeClass('hidden');
  $('.results').empty();
  $('.results').html(responseJson.message.map(element => `<img src= "${element}" class="results-img"/>`).join(''));


  //This is the .append() solution. 
  // let currentImg = responseJson.message;
  // currentImg.forEach(element => {
  //   $('.results').append(`<img src="${element}" class="results-img"/>`)
  // });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});