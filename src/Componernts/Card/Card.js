import React, { useState } from 'react';
import './Card.css'
const Card = (props) => {
    const{cart}=props;
    let total =0;
    for(const product1 of cart){
        // console.log(product1);
        total = total+product1.Time_required;
    }
    
    const [result, setResult] = useState([])
    const handleClick =(e)=>{
      setResult(result.concat(e.target.name))
    }


    return (
        <div>
        <div class="container text-center bg-dark text-white my-5">
             <div class="row">
               <div class="col">
               <h4>75kb</h4>
               <p>Weight</p>
               </div>
            <div class="col">
             <h4>6.5</h4>
             <p>Height</p>
            </div>
           <div class="col">
            <h4>75kb</h4>
             <p>Weight</p>
          </div>
     </div>
   </div>
  
  <div>
    <button className='buttonCard' name='10' onClick={handleClick}>10</button>
    <button className='buttonCard' name='20' onClick={handleClick}>20</button>
    <button className='buttonCard' name='30' onClick={handleClick}>30</button>
    <button className='buttonCard' name='40' onClick={handleClick}>40</button>
    <button className='buttonCard' name='50' onClick={handleClick}>50</button>
  </div>


           <div>
            <h3 className='py-4'>Exercise Details</h3>
           </div>
           <div className='bg-dark text-white py-3'>
           <h3>Exercise time: {total} Seconds</h3>
           </div>

           <div className='bg-dark text-white py-3 my-3'>
            <h3>Break time: {result} Seconds</h3>
           </div>

          <div className='text-center'>
          <button className='question text-white py-3 my-5'>Activity Completed</button>
          </div>

          <div className='text-center py-3 my-3'>
            <a className='question' href="Question.html" target="blank">My Question</a>
           </div>
        </div>
    );
};

export default Card;