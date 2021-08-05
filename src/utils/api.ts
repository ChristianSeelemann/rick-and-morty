export async function getCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  const characters = data.results;
  return characters;
}
