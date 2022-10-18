'use strict'

let randomButton = document.querySelector('#random-button')
let characterImage = document.querySelector('#character-image')
let characterName = document.querySelector('#character-name')

let randomNumber = 1
let BASE_URL = 'https://rickandmortyapi.com/api/character/';

const getCharacter = (randomNumber) => {
    return fetch(`${BASE_URL}${randomNumber}`,{
    method: 'GET'
})
    .then((res) => res.json())
    .then((parsedData) => {
        characterImage.src = parsedData.image
        characterName.textContent = parsedData.name
    });
};

getCharacter(1);

randomButton.onclick = () => {
    randomNumber = Math.floor(Math.random() * (826 - 1 + 1) + 1)
    getCharacter(randomNumber)
}