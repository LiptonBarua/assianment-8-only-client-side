import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Player.css'


const Player = () => {
    const [products, setProduct] = useState([])
    useEffect(()=>{
        fetch('generated.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='player-container'>
            <div className='Player'>
             {
                products.map(product =><Product
                key={product.id}
                product ={product}
                ></Product>)
             }
            </div>
            <div className='cart'>
              <h1>CART</h1>
            </div>
        </div>
    );
};

export default Player;