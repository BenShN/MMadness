import MapPiece from "./MapPiece";
import DestinationPiece from "./DestinationPiece";
import PlayerPiece from "./PlayerPiece.js"
import { StyledMap } from '../styles';
import { useState } from "react";

const Map = () => {

  const h = 8;
  const w = 8;

  //This state array stores objects that represent the pieces on the map
  //When the board is being rendered, the current rendee's coordinates gets checked against this array if a piece is suppose to be on the board
  const [pieces, setPieces] = useState([
    {
      component: <PlayerPiece key={"player"} />,
      name: "player",
      x: 0,
      y: 0
    },
    {
      component: <DestinationPiece key={"destination"} btnpress={reachDestination}/>,
      name: "destination",
      x: getRandomCoordinates(),
      y: Math.trunc(Math.random() * h)
    }
  ]); 

  const grid = [];

  //Passed as a callback fn to the empty(???) tiles so that the player moves to the tile's coordinates
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

  //Generate random coordinates between 0 and ((w OR h) - 1).
  //If oldX and oldY are passed as arguments, it will not generate coordinates there
  function getRandomCoordinates(oldX, oldY) {
    //Return if not enough space
    if(w <= 1 || h <= 1) return [0, 0];

    let newX = Math.trunc(Math.random() * w);
    let newY = Math.trunc(Math.random() * h);
    
    //Keep regenerating if coordinates are the same as last coordinates
    //Only runs if oldX and oldY are passed
    while(oldX && oldY && newX == oldX && newY == oldY) {
      newX = Math.trunc(Math.random() * w);
      newY = Math.trunc(Math.random() * h);
    }
    return [newX, newY]
  }

  let numDestinationsToWin = 3;
  let numDestinationsReach = useState(0);
  function reachDestination(e) {
    e.preventDefault();

    const pieceIndex = pieces.findIndex(piece => {
      return piece.name === "destination";
    })

    oldDestX = pieces[pieceIndex].x
    oldDestY = pieces[pieceIndex].y

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