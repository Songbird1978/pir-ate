import React from 'react';
import { Outlet } from "react-router-dom";
import '../../index.css'
import ShopNav from '../../components/shopNav/shopNav';


function Cart() {

    return (
        <div className="Shop">
            <div>
                <ShopNav />
                <Outlet />
            </div>
            <h1 className="ShopTitle">Shopping Cart</h1>
            <div>
            </div>
        </div>

    );

}

export default Cart;