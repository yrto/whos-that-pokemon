const generatePokeApiUrl = (pokemonId) =>
  `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

const formatPokemonData = (rawPokemonData) => ({
  id: rawPokemonData.id,
  name: rawPokemonData.name,
  img: rawPokemonData.sprites.other.dream_world.front_default
});

export const fetchCleanPokemonData = async (pokemonId) => {
  const response = await fetch(generatePokeApiUrl(pokemonId));
  const rawPokemonData = await response.json();
  const pokemonData = formatPokemonData(rawPokemonData);
  console.log(pokemonData);
  return pokemonData;
};

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
