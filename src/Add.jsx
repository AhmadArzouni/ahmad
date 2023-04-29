import React, { useState } from 'react'

export default function Add() {
    const [title,settitle]=useState("");
    const [author,setauthor]=useState("");
    
    const s=(e)=>{
        e.preventDefault();
const ob ={title,author}
        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ob)
          })
          settitle("");
          setauthor("");

    }
    
  return (
  
    <div><h1>Add Object</h1>
    <form onSubmit={s}>
<input type='text' value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
<br></br>
<input type='text' value={author} onChange={(e)=>{setauthor(e.target.value)}}></input>
<br></br>
<button>Submit</button>

    </form>
    <link to="./products">ShowProducts</link>
    </div>
  )
}
