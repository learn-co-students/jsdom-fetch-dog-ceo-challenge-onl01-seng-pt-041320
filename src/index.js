const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

console.log('%c HI', 'color: firebrick')

function fetchImages() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => renderImages(image))
    });
}

function renderImages(url) {
    let container = document.getElementById('dog-image-container')
    let newImage = document.createElement('img');
    newImage.src = url;
    container.appendChild(newImage);
}   


const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds() {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {
      Object.keys(results.message).forEach(key => renderBreeds(key))
  });
}

function renderBreeds(breed) {
  let ul = document.getElementById("dog-breeds");
  let newLi = document.createElement("li");
  newLi.innerText = breed;
  ul.appendChild(newLi);
};


document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
})