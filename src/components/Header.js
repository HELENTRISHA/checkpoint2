import React from "react";
import { useState,useEffect,  name,  } from "react";

export default function Header() {
  return (
    <div>
      <h1>Hello Welcome! please select a game</h1>
      <h2>{name}</h2>
    </div>
  );
}
