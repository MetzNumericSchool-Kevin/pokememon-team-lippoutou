export async function getASprite() {
  const response = await fetch("http://127.0.0.1:5500/data/pokemon.json")
  const data = await response.json()
  return data
}