import { Header,Button } from "./style";
import { Link } from "react-router-dom";

function HeaderComponent({redirect}){
    return(
        <Header>
            <h1>KenzieShop</h1>
            <div>
                <Link to={redirect}>
                    <Button>
                        Carrinho
                    </Button>
                </Link>
            </div>
        </Header>
        
    )
}

export default HeaderComponent;