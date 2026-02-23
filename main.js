import {hidePokemon, hideBush, hidePokeball, showBush, showPokemon, showPokeball, insertPokemon} from "./modules/grid_manip.js"
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

console.log(grille.querySelector(".box"))







insertPokemon(0, "https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png")
hideBush(0)
showPokemon(0)


const capture = document.querySelector(".liste_pokemons_captures")
const imagesCapture = capture.querySelectorAll("all")


console.log(imagesCapture[0])
function appliqueAGrille(callback) {
    for (let i = 0; i < ROW * COL; i++) {
            callback(i);   
        }
    }

function grilleDeDepart() {
    let tiles = grille.querySelectorAll(`.box`)
    let bush =  '<img src="./assets/bush.webp" class="bush" />'
    let pokeball = '<img src="./assets/pokeball.png" class="pokeball" />'

}


grilleDeDepart()

*/

