import { useEffect } from "react";
import { fetchCleanPokemonData, randomIntFromInterval } from "./helpers";

export default function PokeGuess({
  minMax,
  misteryPokemon,
  setMisteryPokemon,
  guess,
  setGuess,
  fail,
  setFail,
  setFound,
}) {
  //
  // fetch API on mount

  useEffect(() => {
    let randomNumber = randomIntFromInterval(minMax.min, minMax.max);
    while (randomNumber === misteryPokemon.id)
      randomNumber = randomIntFromInterval(minMax.min, minMax.max);
    fetchCleanPokemonData(randomNumber)
      .then((data) => setMisteryPokemon(data))
      .catch(console.log);
  }, []);

  // manage form

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      parseInt(guess) !== misteryPokemon.id &&
      guess !== misteryPokemon.name
    ) {
      setGuess("");
      setFail(true);
      return;
    }
    setGuess("");
    setFail(false);
    setFound(true);
  };

  const handleGiveUp = () => {
    setGuess("");
    setFail(true);
    setFound(true);
  };

  return (
    <div className="flex flex-col">
      <form
        className="flex flex-col text-center text-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={`focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none w-full placeholder-gray-400 text-center rounded-md border border-gray-300 p-2 pl-3 ${
            fail &&
            "border-red-300 bg-red-100 placeholder-red-400 focus:ring-red-100 focus:border-red-400"
          }`}
          placeholder="Name or number"
          value={guess}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-2 py-2 rounded-md bg-red-500 text-white w-full font-black hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          I know it!
        </button>
      </form>
      <button
        className="leading-tight text-sm mt-4 max-w-max mx-auto px-2 focus:outline-none rounded focus:ring-2 focus:ring-gray-200"
        onClick={handleGiveUp}
      >
        Give up
      </button>
    </div>
  );
}
