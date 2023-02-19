import MapPiece from "./MapPiece";
import PlayerPiece from "./PlayerPiece.js"
import { StyledMap } from '../styles';
import { useState } from "react";

const Map = () => {

  const h = 8;
  const w = 8;

  const [pieces, setPieces] = useState([
    {
      component: <PlayerPiece key={"player"} />,
      name: "player",
      x: 1,
      y: 0
    }
  ]); 

  const grid = [];

  function movePlayer(e, x, y) {
    e.preventDefault();
    const pieceIndex = pieces.findIndex(piece => {
      return piece.name === "player";
    })
    setPieces(prevPieces => {
      const newPieces = [...prevPieces];
      newPieces[pieceIndex].x = x;
      newPieces[pieceIndex].y = y;
      return newPieces
    });

  }

  for(let row = 0; row < w; row++) {
    grid.push([]);
    for(let col = 0; col < h; col++) {
      let componentToRender = <MapPiece btnPress={movePlayer} x={col} y={row} key={col * w + row} /> ;

      pieces.forEach(piece => {
        if(piece.x == col && piece.y == row) {
            componentToRender = piece.component;
        }
      });
      grid[row].push(componentToRender);
    }
  }

  return (
    <StyledMap>
      {grid}
    </StyledMap>
  )
}

export default Map;