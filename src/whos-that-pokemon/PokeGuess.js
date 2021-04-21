import React from "react";

export default function PokeGuess() {
  return (
    <form className="flex flex-col text-center w-full space-y-4">
      <p>Take a guess</p>
      <input
        type="text"
        className="text-center p-2 rounded-md"
        placeholder="Pokémon n° or name"
      />
      <button
        type="submit"
        className="font-semibold py-2 rounded-md bg-black text-white"
      >
        Guess
      </button>
    </form>
  );
}
