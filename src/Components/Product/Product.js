import React from 'react';
import './Product.css'
const Product = (props) => {
    const{product, handleAddtoaCart} =props;
    const{id, name, img, For_Age, Time_required}=product;
    return (
        <div className='product-container'>
           <img src={img} alt="" />
            <h3>Sports: {name}</h3>
            <p>For Age: {For_Age}</p>
            <p>Time required: {Time_required}s</p>
            <button onClick={handleAddtoaCart} className='btn-cart'>Add To List</button>
        </div>
    );
};

export default Product;