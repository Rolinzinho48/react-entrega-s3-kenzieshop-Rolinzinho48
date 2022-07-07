import Kart from "../../components/Kart";
import HeaderComponent from "../../components/Header";
import { KartList } from "../../components/Kart/style";
import { KartContent } from "../../components/Kart/style";


function KartPage(){
    
    return(
        <>
            <HeaderComponent redirect='/'></HeaderComponent>
             <KartContent>
                <KartList>
                    <Kart></Kart>
                </KartList>
             </KartContent>
        </>
    )
}

export default KartPage