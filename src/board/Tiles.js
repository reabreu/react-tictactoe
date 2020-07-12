import React from "react";
import styled from "styled-components";

const TileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

const Tile = styled.div`
  flex: 1 1 30%;
  border: 1px solid black;
`;

export const Tiles = ({ move, moves, onClickHandler }) => {
  return (
    <TileWrapper>
      {moves.map((currMove, index) => (
        <Tile onClick={() => onClickHandler(move, index)}> {currMove} </Tile>
      ))}
    </TileWrapper>
  );
};
