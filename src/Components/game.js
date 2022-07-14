import '../App.css';
import { useState, useEffect } from 'react';
import Box from './box';
import { Patterns } from "./pattern"

function Game() {
  const [board, setGameBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [winner, setWinner] = useState({ winner: 'none', state: "none" });

  useEffect(() => {
    CheckWinner();
    CheckGameTied();
    if (player == "X") {
      setPlayer("O")
    } else {
      setPlayer("X")
    }
  }, [board]);

  useEffect(() => {
    if (winner.state != 'none') {
      alert(`Game Finished! Winner: ${winner.winner}`);
      resetGameBoard();
    }
  }, [winner])

  const selectBox = (index) => {
    setGameBoard(
      board.map((val, idx) => {
        if (idx == index && val == "") {
          return player;
        }
        return val;
      })
    );

  };

  const CheckWinner = () => {
    Patterns.forEach((item) => {
      const firstPlayer = board[item[0]]
      if (firstPlayer == "") return;
      let isWinner = true;
      item.forEach((index) => {
        if (board[index] != firstPlayer) {
          isWinner = false;
        }
      })

      if (isWinner) {
        setWinner({ winner: player, state: "Won" })
      }
    })
  }

  const CheckGameTied = () =>{
    let filled = true;
    board.forEach((item) =>{
      if(item == ""){
      filled = false;
      }
    })
    if(filled){
      setWinner({winner: "No One", state:"tie"});
    }
  }

  const resetGameBoard = () =>{
    setGameBoard(["","","","","","","","",""]);
    setPlayer("O");
  }



  return (
    <div className="App">
      <div className='gameBoard'>
        <div className='gamebox'>
          <Box value={board[0]} markBox={() => { selectBox(0) }} />
          <Box value={board[1]} markBox={() => { selectBox(1) }} />
          <Box value={board[2]} markBox={() => { selectBox(2) }} />
        </div>
        <div className='gamebox'>
          <Box value={board[3]} markBox={() => { selectBox(3) }} />
          <Box value={board[4]} markBox={() => { selectBox(4) }} />
          <Box value={board[5]} markBox={() => { selectBox(5) }} />
        </div>
        <div className='gamebox'>
          <Box value={board[6]} markBox={() => { selectBox(6) }} />
          <Box value={board[7]} markBox={() => { selectBox(7) }} />
          <Box value={board[8]} markBox={() => { selectBox(8) }} />
        </div>
      </div>
    </div>
  );
}

export default Game;
