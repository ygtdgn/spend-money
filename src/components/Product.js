import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
        <Card style={{width: '18rem'}}>
            <Card.Body > 
            <Card.Title className="card-title">{product.title}</Card.Title>
            <Card.Text className="price">$ {product.price}</Card.Text>
            <div className="actions">
                <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
                <span>{basketItem && basketItem.amount || 0}</span>
                <Button variant="primary" disabled={total + product.price > money } onClick={addBasket}>Satin Al</Button>
            </div>

            </Card.Body>
        </Card>
    )
}

export default Product