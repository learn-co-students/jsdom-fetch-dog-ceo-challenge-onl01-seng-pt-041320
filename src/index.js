const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//challenge #1 display images

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
  }

function renderImages(imgURLs) {
    //debugger
    imgURLs["message"].forEach(displayImgs)

    function displayImgs(item) {
        document.getElementById("dog-image-container").innerHTML += `<img src="${item}">`
    }
}

// challenge #2 get and display breeds

function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(breed) {
   let breeds =  Object.keys(breed["message"]);

   // step through the array breeds and display them in UL
   breeds.forEach(displayBreed)
    function displayBreed(item) {
       document.getElementById("dog-breeds").innerHTML += `<li>${item}</li">`
    };
};


  
  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
  })