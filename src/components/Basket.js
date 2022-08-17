import { useState } from "react";
import BasketItem from "./BasketItem";
import { Button } from 'reactstrap'


function Basket({basket, resetBasket, products, total}){
    return(
        <>
        {basket.map(item => (
            <BasketItem item={item} product={products.find(p => p.id === item.id) } />
        ))}

         <div>
            Toplam: ${total}
         </div>
         <Button color="warning" onClick={resetBasket}>Sepeti Sifirla</Button>
        </>
    )
}

export default Basket