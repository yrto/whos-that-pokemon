import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WhosThatPokemon.css";

import TvSet from "./TvSet";
import PokeRange from "./PokeRange";
import PokeGuess from "./PokeGuess";
import PokeAgain from "./PokeAgain";
import { MarkGithubIcon } from "@primer/octicons-react";
import { english, portuguese } from "./langs";

const WhosThatPokemonContainer = () => {
  //
  const { minRange, maxRange } = useParams();

  const [minMax, setMinMax] = useState({
    min: minRange >= 1 && minRange < maxRange ? minRange : 1,
    max: maxRange <= 898 && maxRange > minRange ? maxRange : 151,
  });

  const [misteryPokemon, setMisteryPokemon] = useState({});

  const [menu, setMenu] = useState(1);
  const [guess, setGuess] = useState("");
  const [found, setFound] = useState(false);
  const [fail, setFail] = useState(false);

  const [lang, setLang] = useState(() => {
    const langStorage = localStorage.getItem("whos-that-language");
    if (langStorage === "english") return english;
    if (langStorage === "portuguese") return portuguese;
    return english;
  });

  useEffect(() => {
    if (found) setMenu(2);
  }, [found]);

  return (
    <div className="min-h-screen p-6 flex flex-col sm:p-12 poke-background">
      {/* main container */}
      <div className="w-full max-w-3xl mx-auto space-y-6 sm:space-y-8 sm:space-y-12">
        {/* header */}
        <h1 className="text-center text-2xl sm:text-4xl font-bold uppercase text-white">
          {lang.h1}
        </h1>
        {/* tv set */}
        <TvSet
          misteryPokemon={misteryPokemon}
          found={found}
          menu={menu}
          lang={lang}
        />
        {/* menus */}
        <div className="px-4 space-y-6 sm:space-y-8">
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
                lang={lang}
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
                lang={lang}
              />
            )}
            {/* 3. range */}
            {menu === 3 && (
              <PokeRange
                minMax={minMax}
                setMinMax={setMinMax}
                setMenu={setMenu}
                setMisteryPokemon={setMisteryPokemon}
                lang={lang}
              />
            )}
          </div>
          <div className="text-red-800 text-center text-sm">
            <a href="https://github.com/yrto/whos-that-pokemon">
              <MarkGithubIcon verticalAlign="middle" size="medium" />
            </a>
          </div>
          <div className="text-red-800 text-center text-sm space-x-4">
            <button
              onClick={() => {
                setLang(english);
                localStorage.setItem("whos-that-language", "english");
              }}
              className={`font-bold focus:outline-none px-1 rounded ${
                lang === english ? "bg-red-800 text-white" : ""
              }`}
            >
              EN-US
            </button>
            <button
              onClick={() => {
                setLang(portuguese);
                localStorage.setItem("whos-that-language", "portuguese");
              }}
              className={`font-bold focus:outline-none px-1 rounded ${
                lang === portuguese ? "bg-red-800 text-white" : ""
              }`}
            >
              PT-BR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhosThatPokemonContainer;
