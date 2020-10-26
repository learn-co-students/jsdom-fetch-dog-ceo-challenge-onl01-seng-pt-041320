const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


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

function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(breeds) {
    //console.log(breeds)
    breeds["message"].forEach(printName)

    function printName(item) {
        console.log(item)
    }
}

  
  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
  })