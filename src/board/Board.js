import React, { useState } from "react";
import { Tiles } from "./Tiles";
import styled from "styled-components";
import { device } from "../theme/breakpoints";
import { checkWinner } from "./check-winner";

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0 20px 10px;
`;

const ResetButton = styled.button`
  margin-left: 0;
  height: 30px;
  flex: 1 1 100%;
  margin-bottom: 10px;

  @media ${device.tablet} {
    flex: inherit;
    margin-bottom: 0;
    margin-left: 10px;
  }
`;

const MainBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
`;

export const Board = () => {
  const [move, setMove] = useState("X");
  const [moves, setMoves] = useState(new Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const setPlay = (move, index) => {
    if (moves[index]) return;

    const newMoves = [...moves];
    newMoves[index] = move;
    setMoves(newMoves);

    const nextMove = move === "X" ? "O" : "X";
    setMove(nextMove);

    const winner = checkWinner(newMoves);

    if (winner) {
      setWinner(winner);
    }
  };

  return (
    <BoardWrapper>
      <MainBar>
        {winner ? <p>Player {winner} wins!!</p> : <p>Player Turn: {move}</p>}
        <ResetButton
          onClick={() => {
            setMoves(new Array(9).fill(null));
            setWinner(null);
            setMove("X");
          }}
        >
          Reset
        </ResetButton>
      </MainBar>
      <Tiles move={move} moves={moves} onClickHandler={setPlay} />
    </BoardWrapper>
  );
};
