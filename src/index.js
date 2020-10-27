let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
})

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
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

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {
      breeds = Object.keys(results.message)
      updateBreed(breeds);
      breedSelect();
  });
};

function renderBreeds(breed) {
  let ul = document.getElementById("dog-breeds");
  let newLi = document.createElement("li");
  newLi.innerText = breed;
  ul.appendChild(newLi);
  newLi.addEventListener("click",changeColor)
};

function changeColor(event) {
  event.target.style.color = 'red';
};

function breedSelect() {
  let breedDropdown = document.querySelector("#breed-dropdown");
  breedDropdown.addEventListener('change', event => {
    filterBreed(event.target.value);
  });
}

function filterBreed(letter) {
  updateBreed(breeds.filter(breed => breed.startsWith(letter)));
};

function updateBreed(breeds) {
  let ul = document.getElementById("dog-breeds");
  removeUl(ul);
  breeds.forEach(breed => renderBreeds(breed));
};

function removeUl(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}




