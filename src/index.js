console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = "https://dog.ceo/api/breeds/list/all";

let dogImages;
let dogBreeds;
let filterOption;

document.addEventListener("DOMContentLoaded",() =>{
    document.querySelector("#breed-dropdown").addEventListener("change",(e) =>{
        filterOption = e.target.value
        dogBreeds.innerHTML = ""
        fetch(breedUrl)
        .then((resp)=>resp.json())
        .then((json)=>{
            let filterdBreeds = Object.keys(json.message)
            .filter((breed)=>
                breed[0] === filterOption
            )
            renderBreeds(filterdBreeds)       
        })
    })
    fetchDogs()
    fetchBreeds()
})


function fetchDogs() {
    dogImages = document.querySelector("#dog-image-container")
    fetch(imgUrl)
      .then((resp) => resp.json())
      .then((json) => renderDogs(json.message))
}

function renderDogs(dogs){
    dogs.forEach(dog => {
        let img = document.createElement('img')
        img.src = dog;
        dogImages.appendChild(img)
    })
}

function fetchBreeds() {
    dogBreeds = document.querySelector("#dog-breeds")
    fetch(breedUrl)
      .then((resp) => resp.json())
      .then((json) => renderBreeds(Object.keys(json.message)))
}

function renderBreeds(breeds){
    breeds.forEach(breed=>{
        let li = document.createElement('li')
        li.textContent= `${breed}`
        li.addEventListener("click", (e) =>{
            e.target.style.color="purple"

        })
        dogBreeds.appendChild(li)
        
    })   
}

