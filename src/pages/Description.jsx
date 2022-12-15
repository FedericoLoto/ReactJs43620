import { useParams } from "react-router-dom";
import Caja from "../components/Caja"
    
function Description(){
    const {juego}= useParams();
    return(
        <>
            <Caja/>
            <p><b>Titulo:</b> {juego}</p>
            <p> Lorem, ipsum dolor</p>
        </>
        
    )
};
export default Description;