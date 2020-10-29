document.addEventListener("DOMContentLoaded", function() {
console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
return fetch(imgUrl)

.then(resp => {return resp.json();
})
.then(json => {renderImages(json)});
}

function renderImages(images) {
    const dogImages = document.getElementById('dog-image-container')
    images.message.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        dogImages.appendChild(img)
    })
}
  

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedNames;

function fetchDogBreeds() {
    return fetch(breedUrl)
    .then(resp => {return resp.json();
    })
    .then(json => {
        console.log(breedNames)
        breedNames = Object.keys(json.message)
        addDogBreeds(breedNames)

    });
}



function addDogBreeds(breedNames) {
    const dogBreedList = document.getElementById('dog-breeds')
    dogBreedList.innerHTML = ""
    for (let i = 0; i < breedNames.length; i++) {
        let dogBreed = breedNames[i];
        const li = document.createElement('li')
        li.innerHTML = dogBreed
        li.addEventListener('click', changeColor);
        dogBreedList.appendChild(li)
    }
}


function changeColor() {
    this.style.color = "purple"
}

function getBreedByLetter(letter) {

    let breedsByLetter = breedNames.filter((name) => name.startsWith(letter))
    addDogBreeds(breedsByLetter)
}



    fetchImages();
    fetchDogBreeds();
    const dropDown = document.getElementById('breed-dropdown');
    dropDown.addEventListener('change', function() {
        let letter = dropDown.value
        getBreedByLetter(letter)
    })
});