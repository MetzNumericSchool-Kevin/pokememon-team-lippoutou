export function getASprite (spriteVoulu) {
    fetch("http://127.0.0.1:8080/data/pokemon.json")
        .then(response => {
            return response.json()
        })
        .then(function(data) {
            data.array.forEach(element => { 
                if (element.name === spriteVoulu) {
                    return fetch(element.url)
                } else { throw new Error}
            })
        });

}