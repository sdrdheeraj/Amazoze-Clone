import { Link} from 'react-router-dom'
import React from 'react';
import './Navlinks.css'
function Navlinks(){
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                <Link> Today;s Deals</Link>
                <Link> Customer Services</Link>
                <Link> Gifts Cards</Link>
                <Link> Registry</Link>
                <Link> Sell</Link>
                </div>
             
            
            </div>
        </div>
    )
}
export default Navlinks