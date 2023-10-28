import "./App.css";
import { useState } from "react";
// var player11 = prompt("Please Enter 1 Player Name");
// var player22 = prompt("Please Enter 2 Player Name");
var player11 = "ubaid";
var player22 = "Bilal";
// var img1 = [
//   "./Dice/1.png",
//   "./Dice/2.png",
//   "./Dice/3.png",
//   "./Dice/4.png",
//   "./Dice/5.png",
//   "./Dice/6.png",
// ];
function Counter() {
  const [player1, setplayer1] = useState({
    name: player11,
    score: 0,
    active: true,
  });
  const [player2, setplayer2] = useState({
    name: player22,
    score: 0,
    active: false,
  });
  const [dice, setdice] = useState(0);
  const onRollADice = () => {
    const num = Math.floor(Math.random() * 11);
    setdice(num);
    if (player1.active) {
      setplayer1({
        ...player1,
        score: player1.score + num,
        active: num !== 0,
      });
      setplayer2({
        ...player2,
        active: num === 0,
      });
    } else if (player2.active) {
      setplayer2({
        ...player2,
        score: player2.score + num,
        active: num !== 0,
      });
    } else {
      if (player1.score > player2.score) {
        alert(`${player1.name} is won by score ${player1.score}`);
        
      } else {
        alert(`${player2.name} is won by score ${player2.score}`);
      }
    }
  };
  return (
    <div className="parent">
      <div className="player1">
        <h1 className="player">{player1.name}</h1>
        <h2>Score : {player1.score}</h2>

      </div>
      {/* <img src={require(`../Dice/1.png`)} class="imgg" /> */}
      <div className="player2">
        <h1>{player2.name}</h1>
        <h2>Score : {player2.score}</h2>
      </div>
      <h3 className="dice-num">Dice Num : {dice}</h3>
      <button onClick={onRollADice}>Dice</button>
    </div>
  );
}

export default Counter;
