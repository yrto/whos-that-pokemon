import React, { useEffect, useState } from "react";
import "./WhosThatPokemon.css";

import TvSet from "./TvSet";
import PokeRange from "./PokeRange";
import PokeGuess from "./PokeGuess";
import PokeAgain from "./PokeAgain";
import { ArrowUpIcon, MarkGithubIcon } from "@primer/octicons-react";

const WhosThatPokemonContainer = () => {
  //
  const [minMax, setMinMax] = useState({
    min: 1,
    max: 151,
  });

  const [misteryPokemon, setMisteryPokemon] = useState({});

  const [menu, setMenu] = useState(1);
  const [guess, setGuess] = useState("");
  const [found, setFound] = useState(false);
  const [fail, setFail] = useState(false);

  useEffect(() => {
    if (found) setMenu(2);
  }, [found]);

  return (
    <div className="min-h-screen p-8 flex flex-col sm:p-12 poke-background">
      {/* main container */}
      <div className="w-full max-w-3xl mx-auto space-y-8 sm:space-y-12">
        {/* header */}
        <h1 className="text-center text-4xl font-bold uppercase text-white">
          Who's That Pokémon?
        </h1>
        {/* tv set */}
        <TvSet misteryPokemon={misteryPokemon} found={found} menu={menu} />
        {/* menus */}
        <div className="font-black max-w-sm mx-auto rounded-xl p-4 bg-white">
          {/* 1. guess */}
          {menu === 1 && (
            <PokeGuess
              minMax={minMax}
              misteryPokemon={misteryPokemon}
              setMisteryPokemon={setMisteryPokemon}
              guess={guess}
              setGuess={setGuess}
              fail={fail}
              setFail={setFail}
              setFound={setFound}
            />
          )}
          {/* 2. again */}
          {menu === 2 && (
            <PokeAgain
              fail={fail}
              setFail={setFail}
              setFound={setFound}
              setMenu={setMenu}
              setMisteryPokemon={setMisteryPokemon}
            />
          )}
          {/* 3. range */}
          {menu === 3 && (
            <PokeRange
              minMax={minMax}
              setMinMax={setMinMax}
              setMenu={setMenu}
              setMisteryPokemon={setMisteryPokemon}
            />
          )}
        </div>
        <div className="text-white text-center">
          <a href="https://github.com/yrto/whos-that-pokemon">
            <MarkGithubIcon verticalAlign="middle" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhosThatPokemonContainer;
