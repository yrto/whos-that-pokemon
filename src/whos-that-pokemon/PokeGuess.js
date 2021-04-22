import React, { useState } from "react";

export default function PokeGuess({
  setGuess,
  tempGuess,
  setTempGuess,
  found,
  setShow,
}) {
  //
  const [fail, setFail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuess(tempGuess);
    setTempGuess("");
    setTimeout(() => {
      setFail(true);
    }, 200);
  };

  const handleChange = (event) => {
    setTempGuess(event.target.value);
  };

  const handleGiveUp = () => {
    setShow(4);
    setTempGuess("");
  };

  return (
    <div className="rounded-xl shadow-lg p-4 bg-white flex flex-col">
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
          value={tempGuess}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-2 py-2 rounded-md bg-red-500 text-white w-full font-black hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          disabled={found}
        >
          I know it!
        </button>
      </form>
      <button
        className="leading-tight text-sm mt-4 max-w-max mx-auto"
        onClick={handleGiveUp}
      >
        Give up
      </button>
    </div>
  );
}
