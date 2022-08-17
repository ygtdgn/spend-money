import { useState } from "react";
import BasketItem from "./BasketItem";
import { Button } from 'reactstrap'
import '../App.css'


function Basket({basket, resetBasket, products, total}){
    return(
        <>
        <div className="basket-container container">
        <ul>
        {basket.map(item => (
            <BasketItem item={item} product={products.find(p => p.id === item.id) } />
        ))}

        </ul>
         <div className="total">
            Toplam: ${total}
         </div>
         <Button color="warning" onClick={resetBasket}>Sepeti Sifirla</Button>
        </div>
        </>
    )
}

export default Basket