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

  // creating a filter letter from the pulldown
  let filterVar
  let selector = document.getElementById("breed-dropdown")
  selector.addEventListener("change", function(){
  filterVar = selector.value
  console.log(filterBreeds(filterVar));
  });

  // filter breeds array according to the filter set above
  function filterBreeds(letter) {
    breeds = breeds.filter(breed => breed.startsWith(letter))
  };

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




     


    // function selectBreedsStartingWith(letter) {
    //   updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
    // }
    