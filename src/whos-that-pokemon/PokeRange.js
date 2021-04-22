import React, { useState } from "react";

export default function PokeRange({
  mistery,
  setMistery,
  setGuess,
  setTempGuess,
  setShow,
}) {
  //
  const [range, setRange] = useState({
    min: mistery.min,
    max: mistery.max,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await setGuess("");
    await setTempGuess("");
    await setShow(3);
    await setMistery(() => ({
      ...mistery,
      hide: true,
    }));
    let newId = Math.floor(Math.random() * (range.max - range.min) + range.min);
    while (newId === mistery.id) {
      newId = Math.floor(Math.random() * (range.max - range.min) + range.min);
    }
    setMistery({
      id: newId,
      min: range.min,
      max: range.max,
      hide: false,
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setRange({
      ...range,
      [name]: parseInt(event.target.value),
    });
  };

  return (
    <form
      className="flex flex-col text-center text-lg rounded-xl space-y-4 shadow-lg p-4 bg-white"
      onSubmit={handleSubmit}
    >
      <p className="leading-tight">Select the Pokémon range:</p>
      <div className="flex space-x-4 justify-center items-center">
        <input
          type="number"
          name="min"
          className="w-full p-2 pl-3 rounded-md text-black focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none border border-gray-300"
          value={range.min}
          onChange={handleChange}
        />
        <p>to</p>
        <input
          type="number"
          name="max"
          className="w-full p-2 pl-3 rounded-md text-black focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none border border-gray-300"
          value={range.max}
          onChange={handleChange}
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
