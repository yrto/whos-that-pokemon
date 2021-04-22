import React, { useEffect, useState } from "react";
import "./WhosThatPokemon.css";

import TvSet from "./TvSet";
import PokeRange from "./PokeRange";
import PokeGuess from "./PokeGuess";
import { fetchCleanPokemonData } from "./helpers";
import win from "./images/win.gif";

const WhosThatPokemonContainer = () => {
  //
  const [mistery, setMistery] = useState({
    min: 1,
    max: 151,
    hide: false,
  });

  const [guess, setGuess] = useState("");
  const [tempGuess, setTempGuess] = useState("");

  const [show, setShow] = useState(1);

  const found = parseInt(guess) === mistery.id || guess === mistery.name;

  useEffect(() => {
    if (mistery.id) {
      fetchCleanPokemonData(mistery.id)
        .then((data) => setMistery((mistery) => ({ ...mistery, ...data })))
        .catch(console.log);
    }
  }, [mistery.id]);

  useEffect(() => {
    if (found && !show) setShow(2);
  }, [found, show]);

  useEffect(() => {
    if (show === 4) setGuess(mistery.id);
  }, [show, mistery.id]);

  return (
    <div className="min-h-screen p-8 flex flex-col sm:p-12 poke-background">
      <div className="w-full max-w-3xl mx-auto space-y-8 sm:space-y-12">
        <h1 className="text-center text-4xl font-bold uppercase text-white">
          Who's That Pokémon?
        </h1>
        <TvSet mistery={mistery} found={found} show={show} />
        <div className="font-black px-8 max-w-sm mx-auto">
          {show === 1 && (
            <PokeRange
              mistery={mistery}
              setMistery={setMistery}
              guess={guess}
              setGuess={setGuess}
              setTempGuess={setTempGuess}
              setShow={setShow}
            />
          )}
          {show === 2 && (
            <div className="rounded-xl shadow-lg p-4 bg-white">
              <img
                src={win}
                alt="happy pikachu"
                className="mx-auto mb-4 rounded-md w-1/2"
              />
              <button
                className="py-2 rounded-md font-black w-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100"
                onClick={() => {
                  setShow(1);
                  setMistery({
                    ...mistery,
                    hide: true,
                  });
                }}
              >
                Go again?
              </button>
            </div>
          )}
          {show === 3 && (
            <PokeGuess
              setGuess={setGuess}
              tempGuess={tempGuess}
              setTempGuess={setTempGuess}
              found={found}
              setShow={setShow}
            />
          )}
          {show === 4 && (
            <div className="rounded-xl shadow-lg p-4 bg-white">
              <button
                className="py-2 rounded-md font-black w-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100"
                onClick={() => {
                  setShow(1);
                  setMistery({
                    ...mistery,
                    hide: true,
                  });
                }}
              >
                Go again?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhosThatPokemonContainer;
