import React, { useState, useEffect } from "react";
import tvSet from "./images/tv-set.png";
import staticNoise from "./images/static-noise.gif";
import poke1 from "./images/poke1.gif";
import poke2 from "./images/poke2.gif";

export default function TvSet({ misteryPokemon, found, menu, lang }) {
  //
  const [showStatic, setShowStatic] = useState(false);

  useEffect(() => {
    setShowStatic(true);
    setTimeout(() => {
      setShowStatic(false);
    }, 1500);
  }, [misteryPokemon]);

  return (
    <div className="w-full">
      <div className="relative">
        <img src={tvSet} alt="old tv set" className="absolute z-50 w-full" />
        {(menu === 3 || showStatic) && (
          <img
            src={staticNoise}
            alt="static noise"
            className="absolute z-40 w-full"
          />
        )}
        <div className="absolute flex w-full h-full z-10">
          {misteryPokemon !== {} && (
            <>
              <img
                src={misteryPokemon.img}
                alt="who's that pokémon?"
                className={`w-1/4 poke-position self-center filter transition ${
                  found ? "" : "brightness-0"
                }`}
              />
              {found && (
                <p className="self-center text-center poke-name-position uppercase leading-3 text-lg sm:text-3xl md:text-4xl">
                  <span className="text-sm sm:text-xl md:text-3xl">
                    N°{misteryPokemon.id}
                  </span>
                  <br />
                  {misteryPokemon.name}!
                </p>
              )}
            </>
          )}
        </div>
        {found && (
          <img
            src={poke2}
            alt="who's that pokémon? reveal background"
            className="absolute z-0 w-full"
          />
        )}
        <img
          src={poke1}
          alt="who's that pokémon? mistery background"
          className="z-0 w-full"
        />
      </div>
    </div>
  );
}
