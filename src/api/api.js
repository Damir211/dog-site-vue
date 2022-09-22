function getBreedsList() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
        return response.json();
    });
}
function getRandomDogs(){
    return fetch('https://dog.ceo/api/breeds/image/random/20')
    .then((response) => {
        return response.json();
    })
}
function getDogsFromBreeds(breedName){
    return fetch(`https://dog.ceo/api/breed/${breedName}/images`)
    .then((response) => {
        return response.json();
    })
}
export { getBreedsList, getRandomDogs, getDogsFromBreeds };