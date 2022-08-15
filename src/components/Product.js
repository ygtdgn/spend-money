import { useState } from "react";

function Product({product, total, money, basket, setBasket}){
    
    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () =>{
        const checkBasket = basket.find(item => item.id === product.id)
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else{
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }
    
    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

    return(
        <>
            <div className="product">
            <h3>{product.title}</h3>
            <div className="price">$ {product.price}</div>
            <div className="actions">
                <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
                <span>{basketItem && basketItem.amount || 0}</span>
                <button disabled={total + product.price > money } onClick={addBasket}>Satin Al</button>
            </div>
            <style jsx>{`
            .product{
                padding: 10px;
                background-color: #fff;
                border: 1px solid #ddd;
                margin-bottom: 20px;
            }
            `
            }
            </style>
            </div>
        </>
    )
}

export default Product