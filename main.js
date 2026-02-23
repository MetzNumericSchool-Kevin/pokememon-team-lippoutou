const pairOfPokemonIds = ["pikachu", "pikachu", "charmander", "charmander"];

const ROW = 3;
const COL = 4;

const grille = document.querySelector("#grille_de_jeu");
console.log(grille)

console.log(grille.querySelector(".box"))


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

