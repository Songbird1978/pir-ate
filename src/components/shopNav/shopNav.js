import { React } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import './shopNav.css';
import '../../index.css';

function ShopNav ()  {
    return (
        <div className='shopNav'>
            <div className='shopLinks'>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={52} />
                </Link>
            </div>
        </div>
    )
}

export default ShopNav;