import React from "react";
import { useState, useEffect, games } from "react";
import Game from "./Game";

export default function GameList({ games }) {
  return (
    <div>
      {
        (games.map = (game) => {
          <Game
            key={game.id}
            title={game.title}
            name={game.name}
            image_background={game.image_background}
          />;
        })
      }
    </div>
  );
}
