
import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = (props) => {
    const{cart}=props;
    let total =0;
    for(const product1 of cart){
        // console.log(product1);
        total = total+product1.Time_required;
    }
    

   const [server, setServer] = useState(0)
     
    useEffect(()=>{
      if(server !==0){
        localStorage.setItem('local-file', server);
      }
    },[server])
    
    useEffect(()=>{
      const storedbd = localStorage.getItem('local-file');
      if(storedbd){
        setServer(storedbd)
      }
    },[])

    const handleClick1 =(id)=>{
      setServer(id)
      console.log(id);
    }
    return (
        <div>
        <div class="container text-center bg-dark text-white my-5">
             <div class="row py-3">
               <div class="col">
               <h4>75kb</h4>
               <p>Weight</p>
               </div>
            <div class="col">
             <h4>6.5</h4>
             <p>Height</p>
            </div>
           <div class="col">
            <h4>25yrs</h4>
             <p>Age</p>
          </div>
     </div>
   </div>
  
  <div>
     <h2>Add a Break</h2>
    <button className='buttonCard' onClick={()=>handleClick1(10)}>10</button>
    <button className='buttonCard' onClick={()=>handleClick1(20)}>20</button>
    <button className='buttonCard' onClick={()=>handleClick1(30)}>30</button>
    <button className='buttonCard' onClick={()=>handleClick1(40)}>40</button>
    <button className='buttonCard' onClick={()=>handleClick1(50)}>50</button>
    
  </div>


           <div>
            <h3 className='py-4'>Exercise Details</h3>
           </div>
           <div className='bg-dark text-white py-3'>
           <h3>Exercise time: {total} Seconds</h3>
           </div>

           <div className='bg-dark text-white py-3 my-3'>
            <h3>Break time: {server} Seconds</h3>
            {/* <p>{id}</p> */}
           </div>

          <div className='text-center'>
          <button className='question1 text-white py-3 my-5'>Activity Completed</button>
          </div>

          <div className='text-center py-3 my-3'>
            <a className='question' href="Question.html" target="blank">My Question</a>
           </div>
        </div>
    );
};

export default Card;