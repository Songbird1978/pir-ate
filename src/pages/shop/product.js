import React from 'react';
//import { Outlet } from "react-router-dom";
import '../../index.css';
import './shop.css';
import Card from '@mui/material/Card';




function Product(props) {
    const { id, productName, price, productImage } = props.data;
    return (
       
                <Card>
                    <div className="productName">
                        <img src={productImage} />
                        <div className="productDescription">
                            <p>  <b>{productName}</b></p>
                            <p>£{price}</p>
                        </div>
                    </div>
                </Card>
     


    );

}

export default Product;