import { useState } from 'react'
import Card from "./Components/Card"
import { Data } from './Data'


function App() {


  
  return (
    <>


      {
        Data.map((e,i)=>{
         return(
          <Card 
          key = {e.id}
          id = {e.id}
          imgSrc={e.image}
          title ={e.title}
          desc={e.description}
          price = {e.price}
          category = {e.category}
          rate = {e.rating}
          
          />
         )
        })
      }
    </>
  )
}

export default App
