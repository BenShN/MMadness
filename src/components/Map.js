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
      x: 1,
      y: 0
    }
  ]); 

  const grid = [];

  for(let row = 0; row < w; row++) {
    grid.push([]);
    for(let col = 0; col < h; col++) {
      let componentToRender = <MapPiece key={col * w + row} /> ;

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

function renderPiece(pieces) {

}

export default Map;