import { useEffect, useState } from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";

import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  const [webName, setWebName] = useState({
    name: "react game",
  });

  const gameInfo = () => {
    console.log(gameInfo);
  };

  const getGames = () => {
    fetch("https://apis.wilders.dev/wild-games/games")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  useEffect(getGames, []);

  return (
    <div className="App">
      <Header webName={webName} />
      <GameList games={games} />
    </div>
  );
}

export default App;
