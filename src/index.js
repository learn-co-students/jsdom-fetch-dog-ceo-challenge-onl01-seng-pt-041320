const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


//challenge #1 display images

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
  }

function renderImages(imgURLs) {
    imgURLs["message"].forEach(displayImgs)

    function displayImgs(item) {
        document.getElementById("dog-image-container").innerHTML += `<img src="${item}">`
    }
}

// challenge #2 & challenge 4 get and display breeds

function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(breed) {
  //test breeds array
  let breeds =  Object.keys(breed["message"]);

  // creating a filter letter from the pulldown
  let filterVar
  let selector = document.getElementById("breed-dropdown")
  selector.addEventListener("change", function(){
  filterVar = selector.value
  console.log(filterVar);
  filterBreeds(filterVar);
  displayBreeds();
  //console.log(filterBreeds(filterVar));
  });

  // filter breeds array according to the filter set above
  function filterBreeds(letter) {
    if (letter) {
      tempArray = breeds.filter(breed => breed.startsWith(letter));
    } else {
      tempArray = breeds;
    }
    return tempArray
  };

   // step through the array breeds and display them in UL
   function displayBreeds() {
    document.getElementById("dog-breeds").innerHTML = "";
    displayArray = filterBreeds(filterVar)
    displayArray.forEach(displayBreed)
     function displayBreed(item) {
        document.getElementById("dog-breeds").innerHTML += `<li>${item}</li">`
     };
   };
  
   displayBreeds();
};
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
  })




     


    // function selectBreedsStartingWith(letter) {
    //   updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
    // }
    