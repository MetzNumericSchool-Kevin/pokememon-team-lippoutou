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

