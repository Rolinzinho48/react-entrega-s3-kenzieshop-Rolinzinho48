const products = [
    {name: "God of War", price: 179.00, image: "link-da-imagem"},
    {name: "Assassin's Creed Origins", price: 35.00, image: "link-da-imagem"},
    {name: "Fall Guys", price: 19.00, image: "link-da-imagem"},
    {name: "Grand Theft Auto V", price: 62.00, image: "link-da-imagem"},
    {name: "Sifu", price: 173.00, image: "link-da-imagem"},
    {name: "Call of Duty", price: 55.00, image: "link-da-imagem"},
    {name: "Overcooked", price: 15.00, image: "link-da-imagem"},
    {name: "Overcooked 2", price: 42.00, image: "link-da-imagem"},
    {name: "Tom Clancy's Ghost", price: 35.00, image: "link-da-imagem"},
    {name: "Mario Kart", price: 380.00, image: "link-da-imagem"},
    {name: "Forza Horizon 5", price: 128.00, image: "link-da-imagem"},
    {name: "Dirt 5", price: 88.00, image: "link-da-imagem"}
]

const productList = (state=products,action)=>{
    switch(action.type){
        
        default:
            return state;
    }
}

export default productList