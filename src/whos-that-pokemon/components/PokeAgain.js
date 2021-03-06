import React from "react";

import win from "./../images/win.gif";
import lose from "./../images/lose.gif";
import Button from "./Button";

export default function PokeAgain({
  fail,
  setFail,
  setFound,
  setMenu,
  setMisteryPokemon,
  lang,
}) {
  return (
    <div>
      {fail && (
        <img
          src={lose}
          alt="sad pikachu"
          className="mx-auto mb-4 rounded-md w-1/2"
        />
      )}
      {!fail && (
        <img
          src={win}
          alt="happy pikachu"
          className="mx-auto mb-4 rounded-md w-1/2"
        />
      )}
      <div className="flex space-x-4">
        {/* <button
          className="py-2 rounded-md font-black w-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100"
          onClick={() => {
            setFail(false);
            setFound(false);
            setMisteryPokemon({});
            setMenu(3);
          }}
        >
          {lang.againRange}
        </button> */}
        <Button
          handleClick={() => {
            setFail(false);
            setFound(false);
            setMisteryPokemon({});
            setMenu(3);
          }}
          type={"secondary"}
        >
          {lang.againRange}
        </Button>
        <Button
          handleClick={() => {
            setFail(false);
            setFound(false);
            setMisteryPokemon({});
            setMenu(1);
          }}
          type={"primary"}
        >
          {lang.againGoAgain}
        </Button>
      </div>
    </div>
  );
}
