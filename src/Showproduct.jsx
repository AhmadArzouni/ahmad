import React, { useState,useEffect } from 'react'

export default function Showproduct() {
    const url='http://localhost:3001/products';
    const [p,setp]=useState("");
    useEffect(()=>{
        fetch(url)
        .then(res => {
          if (!res.ok){
    
                throw Error('there is a problem');
            }
    
            return res.json();
        })
        .then(data => {
    
                  setp(data);
                  console.log("assil");
                  console.log(data);
                  
        })
        .catch(err=>{
    
                  console.log(err.message);
                  
        })
    
    
    },[url]);
    
   

  return (
    <div>
 {p.map((user) => (
        <div className="user" key={user.id} >
        <h2>{user.title}</h2>  
          </div>
      ))}
    </div>
  )
}
