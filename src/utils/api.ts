import type { AllCharactersFromAPI, Character } from '../types';

export async function getCharacters(): Promise<Character[]> {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data: AllCharactersFromAPI = await res.json();
  const characters = data.results;

  const formattedCharacters: Character[] = characters.map((character) => {
    const formattedCharacter: Character = {
      name: character.name,
      thumbnail: character.image,
      gender: character.gender,
      status: character.status,
      species: character.species,
      lastLocation: character.location.name,
    };
    return formattedCharacter;
  });

  return formattedCharacters;
}
