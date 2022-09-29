import React from 'react';

const Card = (props) => {
    const{cart}=props;
    let total =0;
    for(const product1 of cart){
        // console.log(product1);
        total = total+product1.Time_required;
    }
    return (
        <div>
        <div class="container text-center bg-danger my-5">
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
           <div className='bg-danger'>
           <h3>Exercise time: {total}Seconds</h3>
           </div>
        </div>
    );
};

export default Card;