import React from 'react';
import ReactDOM from 'react-dom';


const hello = () => {
  return (
    <div>
      HI
    </div>
  )
}

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root")
  ReactDOM.render(<hello />,"root")
})
