import MapPiece from "./MapPiece";
import { StyledMap } from '../styles';

const Map = () => {
  return (
    <StyledMap>
    {Array(64).fill().map((index)=>(
      <MapPiece key={index}/>
    ))}
    </StyledMap>
  )
}

export default Map;