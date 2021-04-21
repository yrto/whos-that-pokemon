import React from "react";

export default function NumberRangeSelector() {
  return (
    <form className="flex flex-col text-center w-full">
      <p>Select a Pokémon range</p>
      <div className="flex space-x-4 my-4 justify-center items-center">
        <input
          type="number"
          className=" w-full p-2 pl-3 rounded-md"
          defaultValue="1"
        />
        <p className="flex-grow">to</p>
        <input
          type="number"
          className=" w-full p-2 pl-3 rounded-md"
          defaultValue="150"
        />
      </div>
      <button
        type="submit"
        className="font-semibold py-2 rounded-md bg-black text-white"
      >
        Let's go!
      </button>
    </form>
  );
}
