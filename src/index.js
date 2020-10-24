console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogBreedsList = document.getElementById("dog-breeds");
    let dogBreedSelect = dogBreedsList.getElementsByTagName("li");
    let breedDropDown = document.getElementById("breed-dropdown");
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const anotherImgUrl = "https://dog.ceo/api/breeds/list/all";

    function changeColor(target) {
        target.style.color = generateRandomColor();
    }

    function createImage(image) {
        let imgUrlArray = image["message"];

        for (const imgUrl of imgUrlArray) {
            let span = document.createElement("span");

            span.innerHTML = `<img src="${imgUrl}" height="150">`;
            dogImageContainer.append(span);
        }
    }

    function breedLister(breed) {
        let breedHash = breed["message"];

        for (const key in breedHash) {
            let li = document.createElement("li");

            li.addEventListener("click", function() {
                changeColor(event.target);
            })
            li.innerText = `${key}`;
            dogBreedsList.append(li);
        }
    }

    function filterDogBreeds() {
        breedDropDown.addEventListener("change", function ()
        {
            let selected = breedDropDown.value;

            for (li of dogBreedSelect)
            {
                if (selected === li.innerText.slice(0, 1) || selected === "all")
                {
                    li.style.display = "";
                }
                else
                {
                    li.style.display = "none";    
                }
            }
        })
    }

    function generateRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    fetch(imgUrl)
        .then(resp => resp.json())
        .then(img => createImage(img));

    fetch(anotherImgUrl)
        .then(resp => resp.json())
        .then(breed => breedLister(breed))
        .then(filterDogBreeds);
})