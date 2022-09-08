import React from 'react'
import Car from "../Card/Car.js"
import "./Main.css"
import data from "../Data"

const Main = () => {
 
  const products=data.products
  return (
    <div className='main-card'>
       {products && products.map((item)=><Car name={item.name} key={item.id} price={item.price} img={item.img}/>)}
    </div>
  )
}

export default Main