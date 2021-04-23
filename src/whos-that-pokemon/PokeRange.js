import React, { useState } from "react";

export default function PokeRange({
  minMax,
  setMinMax,
  setMenu,
  setMisteryPokemon,
}) {
  //
  const [newMinMax, setNewMinMax] = useState(minMax);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMinMax(newMinMax);
    setMisteryPokemon({});
    setMenu(1);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setNewMinMax({
      ...newMinMax,
      [name]: parseInt(event.target.value),
    });
  };

  return (
    <form
      className="flex flex-col text-center text-lg rounded-xl space-y-4"
      onSubmit={handleSubmit}
    >
      <p className="leading-tight">Select a Pokémon range:</p>
      <div className="flex space-x-4 justify-center items-center">
        <input
          type="number"
          name="min"
          className="w-full p-2 pl-3 rounded-md text-black focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none border border-gray-300"
          value={newMinMax.min}
          onChange={handleChange}
          min={1}
          max={898}
        />
        <p>to</p>
        <input
          type="number"
          name="max"
          className="w-full p-2 pl-3 rounded-md text-black focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none border border-gray-300"
          value={newMinMax.max}
          onChange={handleChange}
          min={1}
          max={898}
        />
      </div>
      <button
        type="submit"
        className="py-2 rounded-md bg-red-500 text-white w-full font-black hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Let's go!
      </button>
    </form>
  );
}
