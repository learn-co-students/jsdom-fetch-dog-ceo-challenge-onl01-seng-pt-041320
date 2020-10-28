console.log('%c HI', 'color: firebrick')


const breedUrl = "https://dog.ceo/api/breeds/list/all"
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let newBreeds = [];

document.addEventListener('DOMContentLoaded', function() {
    fetchDogBreeds();
    fetchAllBreeds();
})
function fetchDogBreeds() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(returnedData => {
        returnedData.message.forEach(breeds => renderBreeds(breeds))
    });
}

function renderBreeds(breeds) {
    const dogImage = document.getElementById("dog-image-container");
    const img = document.createElement("img");
    img.src = breeds;
    dogImage.appendChild(img);
}

function fetchAllBreeds() {
    fetch(breedUrl) 
    .then(resp => resp.json())
    .then(returnedData => {
        newBreeds = Object.keys(returnedData.message);
        newBreeds.forEach (breed => renderBreedList(breed));
        updateBreedList(newBreeds);
        addBreedSelectListener();
    })
}

function renderBreedList(breed) {
    let dogBreeds = document.getElementById("dog-breeds");
    const li = document.createElement("li");
    li.innerText = breed;
    li.style.cursor = 'pointer';
    dogBreeds.appendChild(li);
    li.addEventListener("click", colorChange);
}

function colorChange(event) {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    event.target.style.color = color; 
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => renderBreedList(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(newBreeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
