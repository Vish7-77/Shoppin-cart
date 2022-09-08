import React from 'react'
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
const Header = () => {

  
  const {cn} =useSelector((state)=>state.cust) 
 
  return (
    <div>
        <nav className="navbar bg-dark">
  <div className="container-fluid">
    <a  href="/" style={{color:"white"}} className="navbar-brand">Navbar</a>
  <div clasName="divv"><div className='bindu'>{cn}</div><ShoppingCartIcon style={{color:"white", width:"9rem",cursor:"pointer"}}  />
    </div> 
   </div>
</nav>
    </div>
  )
}

export default Header