import React from 'react';
import './Product.css'
const Product = (props) => {
    const {product,handleAddToCart}=props
    const{id,img, name, For_Age,Time_required} =product;
    return (
        <div className='card'>
           <img src={img} alt="" />
           <h3>{name}</h3>
            <p>For Age: {For_Age}</p>
            <p>Time required: {Time_required}s</p>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>Add to list</button>
        </div>
    );
};

export default Product;