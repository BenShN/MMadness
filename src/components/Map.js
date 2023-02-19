import MapPiece from "./MapPiece";
import { StyledMap } from '../styles';
import { useState } from "react";

const Map = () => {
  // const [index, setIndex] = useState(1);

  const h = 8;
  const w = 8;

  return (
    <StyledMap>
    {Array(h * w).fill().map((arr, index) => (
      <MapPiece key={index} index={index}/>
    ))}
    </StyledMap>
  )
}

export default Map;