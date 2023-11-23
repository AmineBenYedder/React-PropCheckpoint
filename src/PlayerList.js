import players from "./Players";
import Player from "./Player";

const PlayerList =()=> {
    return(

<div style={{display:"flex",flexDirection:'column',justifyContent:'space-between',alignItems:'center',margin:"10px"}}>
{
    players.map((el)=>(
<Player element={el}/>))

}
</div>

    )
}
export default PlayerList