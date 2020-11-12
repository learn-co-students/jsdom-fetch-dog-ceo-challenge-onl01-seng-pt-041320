console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImages() {
    fetch(imgUrl).then(response => response.json())
    .then(json => displayImages(json));
};

function displayImages(imageJson) {
    let imageContainer = document.getElementById("dog-image-container");
    imageJson.message.forEach(imageUrl => {
        let imageTag = `<img src='${imageUrl}' height='150'>`;
        imageContainer.innerHTML += imageTag;
    });
}

function fetchBreeds() {
    fetch(breedUrl).then(response => response.json())
    .then(json => displayBreeds(json));    
};

function displayBreeds(dataJson){
    let breedsList = document.getElementById("dog-breeds");
    Object.keys(dataJson.message).forEach(breed => {
        breedsList.innerHTML += `<li class="breed">${breed}</li>`;
    });
    listenForClick();
}

function listenForClick(){
    let breedList = document.getElementById("dog-breeds");
    Array.from(breedList.getElementsByTagName("li")).forEach(listItem => {
        listItem.addEventListener("click", (event) => {
            event.target.style.color = "pink"; // event.target returns element that interacted with event
        });
    });
}

function listenForFilter() {
    let breedSelect = document.getElementById("breed-dropdown");
    breedSelect.addEventListener("change", (event) => {
        filterBreeds(event.target.value);
    })
}

function filterBreeds(letter) {
    let breedList = document.getElementById("dog-breeds");
    Array.from(breedList.getElementsByTagName("li")).forEach(listItem => {
        if (letter != listItem.innerText[0]) {
            listItem.style.display = 'none';
        } else {
            listItem.style.display = 'list-item';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    listenForFilter();
});
