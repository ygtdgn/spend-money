import Header from './components/Header';
import Product from './components/Product'
import Basket from './components/Basket'
import { useState, useEffect } from "react";
import products from './products.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';



function App() {

  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState()
  const resetBasket = () => {
    setBasket([])
  }


  useEffect(() => {
    setTotal(basket.reduce((acc, item) =>{
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0),
    )
  },[basket])
  
  return (
  <>
    <Header total={total} money={money} />

    {products.map(product =>(
      <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
    ))}    
    {total > 0 && (
      <Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
    )}

  </>
  );
}

export default App;
