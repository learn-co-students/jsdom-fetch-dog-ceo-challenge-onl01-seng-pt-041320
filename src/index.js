const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breedList = document.getElementById("dog-breeds")
var filterList = []

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs()
  pictureDogs()
  filterDogs()
})

function displayDogs(images) {
  const pics = images.message
  const container = document.getElementById("dog-image-container")

  pics.forEach(image => 
    {
      var img = document.createElement('img');
      img.src = image
      container.appendChild(img);
    });
};

function listDogs(breeds) {
  const list = breeds.message
  Object.keys(list).forEach(dog => {
    var li = document.createElement('li');
    li.innerText = dog
    breedList.appendChild(li);
    filterList.push(dog)
  });
};

function filterDogs() {
  document.getElementById("breed-dropdown").addEventListener('change', event => {
    event.preventDefault
    filter = []
    const value = document.getElementById("breed-dropdown").value
    switch(value) {
      case "a":
        filterList.forEach(dog => {
          if (dog[0] == "a") {
            filter.push(dog)
          }
        })
        break;
      case "b":
        filterList.forEach(dog => {
          if (dog[0] == "b") {
            filter.push(dog)
          }
        })
        break;
      case "c":
        filterList.forEach(dog => {
          if (dog[0] == "c") {
            filter.push(dog)
          }
        })
        break;
      case "d":
        filterList.forEach(dog => {
          if (dog[0] == "d") {
            filter.push(dog)
          }
        })
        break;
    }
    breedList.innerHTML = ""
    filter.forEach(dog => {
  
      var li = document.createElement('li');
      li.innerText = dog
      breedList.appendChild(li);
    });
  });

}

function pictureDogs() {
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => displayDogs(json))
};

function fetchDogs() {
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => listDogs(json))
};