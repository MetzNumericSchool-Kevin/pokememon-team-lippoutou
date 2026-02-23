
import {hidePokemon, hideBush, hidePokeball, showBush, showPokemon, showPokeball, insertPokemon} from "./modules/grid_manip.js"

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