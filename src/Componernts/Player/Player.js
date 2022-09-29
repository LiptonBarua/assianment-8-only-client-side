import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import logo from'../Player/png-transparent-computer-icons-sport-icon-design-spor-text-hand-logo.png'
import './Player.css'
import Card from '../Card/Card';
import cardImage from '../Player/FB_IMG_15739746375651641.jpg'

const Player = () => {
    const[players, setPlyaer] = useState([])
    const [cart, setCart]= useState([])
     useEffect(()=>{
         fetch ('generated.json')
         .then(res=>res.json())
         .then(data=>setPlyaer(data))
     },[])

     const handleAddToCart=(product)=>{
      const newCart = [...cart, product]
      setCart(newCart)
     }
    return (
        <div>
        <div className="row">
          <div className="col-12 col-lg-8 pt-5 banner-part">
            <div className='header-container container'>
              <img src={logo} alt="" />
              <h1>Bangladesh Sports Club</h1>
               <div></div>
            </div>
            <div className='container'>
            <h4 className='pt-5 px-5'>Select today’s sports</h4>
            </div>
            <div className='product-container'>
              
              {
                players.map(product=><Product 
                  key={product.id}
                  product={product}
                  handleAddToCart ={handleAddToCart}
                  ></Product>)
              }
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 bg-info">
              <div className='cart-container'>
                <div className='bio-data'>
                  <img src={cardImage} alt="" />
                  <div className='card-title'>
                     <h5>Lipton Barua</h5>
                     <small>Web Developer</small>
                  </div>
                </div>
                  <Card cart={cart}></Card>
              </div>
            </div>
        </div>
        </div>
    );
};

export default Player;