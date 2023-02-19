import MapPiece from "./MapPiece";
import PlayerPiece from "./PlayerPiece.js"
import { StyledMap } from '../styles';
import { useState } from "react";

const Map = () => {

  const h = 8;
  const w = 8;

  const [pieces, setPieces] = useState([
    {
      component: <PlayerPiece />,
      name: "player",
      x: 0,
      y: 0
    }
  ]); 

  const grid = [];

  for(let col = 0; col < w; col++) {
    grid.push([]);
    for(let row = 0; row < h; row++) {
      let componentToRender = <MapPiece key={col * w + row} /> ;

      pieces.forEach(piece => {
        if(piece.x == row && piece.y == col) {
            componentToRender = piece.component;
        }
      });
      grid[col].push(componentToRender);
    }
  }

  return (
    <StyledMap>
      {grid}
    </StyledMap>
  )
}

function renderPiece(pieces) {

}

export default Map;