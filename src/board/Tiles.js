import React from "react";
import styled from "styled-components";
import { Circle } from "./Circle";
import { X } from "./X";

const TileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

const Tile = styled.div`
  flex: 1 1 30%;
  border: 1px solid black;
  position: relative;
`;

export const Tiles = ({ move, moves, onClickHandler }) => {
  return (
    <TileWrapper>
      {moves.map((currMove, index) => (
        <Tile key={index} onClick={() => onClickHandler(move, index)}>
          {currMove && (currMove === "X" ? <X /> : <Circle />)}
        </Tile>
      ))}
    </TileWrapper>
  );
};
