import { fetchJson } from "./api";

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemon(id) {
  const pokemon = await fetchJson(`${API_BASE_URL}/${id}`);
  return pokemon;
}

export async function getPokemons() {
  const pokemons = await fetchJson(`${API_BASE_URL}?limit=150`);
  return pokemons.results.map((pokemon, index) => {
    const paddedIndex = ("00" + (index + 1)).slice(-3);
    const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    return {
      id: index,
      name: pokemon.name,
      imgUrl,
    };
  });
}

