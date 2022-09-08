import React from  "react"
import "./car.css"
import { useDispatch} from "react-redux"

const Car=({name,price,img})=>{



const dispatch =useDispatch();

const addbt=()=>{
  dispatch({
    type:"inc"
  })
}



    return(
        
   
        <div className="card" style={{width: "18rem"}}>
  <img src={img} className=" ima card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{price}</p>
    
      
    <button  className="  hel btn btn-outline-success"  onClick={addbt}>Add to cart</button>
  </div>
</div>
        
        
    )
}

export default Car