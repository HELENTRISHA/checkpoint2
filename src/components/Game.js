import { useState, useEffect } from "react";
import React from "react";


export default function Game({ title, name, image_background }) {
  return (
    <div className="game-container">
      <h1>{title}</h1>
      <h2>{name}</h2>
      <img src={image_background} />
    </div>
  );
}
