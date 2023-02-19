import MapPiece from "./MapPiece";
import { StyledMap } from '../styles';

const Map = () => {
  return (
    <StyledMap>
    {Array(8).fill().map((val, y)=>(
       Array(8).fill().map((val, x)=>(
        <MapPiece x={x} y={y}/>
      ))

    ))}
    </StyledMap>
  )
}

export default Map;