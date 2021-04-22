const generatePokeApiUrl = (pokemonId) =>
  `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

const formatPokemonData = (rawPokemonData) => ({
  id: rawPokemonData.id,
  name: rawPokemonData.name,
  img: `https://pokeres.bastionbot.org/images/pokemon/${rawPokemonData.id}.png`,
});

export const fetchCleanPokemonData = async (pokemonId) => {
  const response = await fetch(generatePokeApiUrl(pokemonId));
  const rawPokemonData = await response.json();
  // console.log(rawPokemonData);
  const pokemonData = formatPokemonData(rawPokemonData);
  console.log(pokemonData);
  return pokemonData;
};
