
import { getASprite } from "./modules/pokeapi.js"
const pokemonFetch = await getASprite()

let listPokemon = []
let randomUtiliser = []
const gridSize = 6


while(randomUtiliser.length+1 <= gridSize){
    let randomNombre = parseInt(Math.random()*12)

    if (!randomUtiliser.includes(randomNombre)) {
        randomUtiliser.push(randomNombre)
        listPokemon.push(pokemonFetch[randomNombre])
        listPokemon.push(pokemonFetch[randomNombre])
    }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(listPokemon)

console.log(listPokemon)






/*
const pairOfPokemonIds = ["pikachu", "pikachu", "charmander", "charmander"];

const ROW = 3;
const COL = 4;

const grille = document.querySelector("#grille_de_jeu");
console.log(grille)

console.log(grille.querySelectorAll(element => {
    console.log(element)
}))


function appliqueAGrille(callback) {
    for (let i = 0; i < ROW * COL; i++) {
            callback(i);   
        }
    }

function grilleDeDepart(i) {
    let tile = grille.querySelector(`:nth-child(${i + 1})`);
    tile.className("bush")
}

appliqueAGrille(grilleDeDepart)

*/

