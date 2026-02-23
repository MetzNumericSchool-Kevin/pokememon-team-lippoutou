
const grille = document.querySelector("#grille_de_jeu");

function getBox(index) {
    return grille.querySelectorAll(".box")[index]
}

export function hidePokemon(index) {
    let box = getBox(index)
    box.querySelector(".pokemon").style.display = "none"
}

export function hideBush(index) {
    let box = getBox(index)
    box.querySelector(".bush").style.display = "none"
}

export function hidePokeball(index) {
    let box = getBox(index)
    box.querySelector(".pokeball").style.display = "none"
}

export function showPokemon(index) {
    let box = getBox(index)
    box.querySelector(".pokemon").style.display = "block"
}

export function showBush(index) {
    let box = getBox(index)
    box.querySelector(".bush").style.display = "block"
}

export function showPokeball(index) {
    let box = getBox(index)
    box.querySelector(".pokeball").style.display = "block"
}

export function insertPokemon(index, sprite) {
    let box = getBox(index)
    box.querySelector(".pokemon").src = sprite
}