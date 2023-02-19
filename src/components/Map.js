import MapPiece from "./MapPiece";
import PlayerPiece from "./PlayerPiece.js"
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

function renderPiece(pieces) {

}

export default Map;