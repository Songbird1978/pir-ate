import React from 'react';
import { Outlet } from "react-router-dom";
import '../../index.css'
import ShopNav from '../../components/shopNav/shopNav';
import { PRODUCTS } from '../../products';
import Product from './product';
import Grid from '@mui/material/Grid';


function Shop() {

    return (
        <div className="Shop">
            <ShopNav />
            <Outlet />
            <div>
                <h1 className="ShopTitle">Gift Shop</h1>
            </div>
            <Grid container spacing={4}>
                
                {PRODUCTS.map((product) => (
                <Grid item xs={12} sm={6} md={4} className="Products"> 
                <Product data={product} /> </Grid>))}

            </Grid>
        </div>

    );

}

export default Shop;