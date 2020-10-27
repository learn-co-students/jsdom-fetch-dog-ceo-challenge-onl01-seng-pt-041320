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

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })