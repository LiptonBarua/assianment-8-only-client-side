import React from 'react';
import './Product.css'
const Product = (props) => {
    const{id, name, img, For_Age, Time_required}=props.product;
    return (
        <div className='product-container'>
           <img src={img} alt="" />
            <h3>{name}</h3>
            <p></p>
        </div>
    );
};

export default Product;