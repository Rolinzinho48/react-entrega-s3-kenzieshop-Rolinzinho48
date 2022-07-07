import ProductList from "../../components/ProductList";
import Header from '../../components/Header'


function MainPage(){
    return(
        <>
            <Header redirect='/kart'></Header>
            <ProductList></ProductList> 
        </>
    )
}

export default MainPage;