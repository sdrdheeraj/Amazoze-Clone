import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

import {Link} from 'react-router-dom'
import './Header.css'
import  ShoppingBasketIcon  from '@mui/icons-material/ShoppingBasket'
import { useStateValue } from './StateProvider'
import {auth} from './firebase'

function Header()
{
    const [{basket, loggedinuser},dispatch] = useStateValue();
//console.log("my basket", basket)
    const logoutUser = () =>{
        if(loggedinuser){
            auth.signOut();
            
        }
    }
    return(
        <nav class="header">
            <img className="header__logo"  alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            <div className="header__search">
                <input type = "text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
            <Link to={!loggedinuser && "/login"}className="header__link">
                <div onClick={logoutUser} className="header__option">
                <span className="header__optionLineOne">Hello,{loggedinuser?.email}</span>
                <span className="header__optionLineTwo">{loggedinuser ? 'Signout' : 'Sign In'}</span>
            </div>
            </Link>

            <Link to="/" className="header__link">
               <div className="header__option">
               <span className="header__optionLineOne">Returns</span>
             <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>

            <Link to="/" className="header__link">
              <div className="header__option">
             <span className="header__optionLineOne">You</span>
             <span className="header__optionLineTwo">Prime</span>
             </div>
             </Link>
             </div> 
             <Link to ="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__productCount">{basket?.length}</span>
                </div>
             </Link>
            
        </nav>
    )
}
export default Header