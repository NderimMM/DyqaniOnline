import React from "react";
import Product from "../components/Product";


export default function ProductScreen (){
    return (
    <div>
       
    <div className="row">
        <div className="col-2">
        <img src={Product.image} alt={Product.name}></img>
        </div>

        <div className="col-1">

        </div>

        <div className="col-1">

        </div>
    </div>

    </div>
    );
}