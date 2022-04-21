/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
    
export default function CartItem({ prmProduct }) {
    const {
        productsCart = [],
        addProducToCart,
        removeProductToCart,
        clearCart
    } = useContext(CartContext);

    let qtd = productsCart.find(p => p.id === prmProduct.id)?.qtd | 0;

    return (

            <li style={{listStyle: "none", textAlign: "center", border: "1px #666", borderRadius:"10px", margin:"30px", width: 450, height:400, alignItems: "center", background: "white", boxShadow: "5px 5px 5px #D3D3D3" }}>
                <Link to={`/detalhes/${prmProduct.id}`}style={{textDecoration:"none"}}>
                    <img  style={{ width: 200, height:150, margin: "10px 120px"}} src={prmProduct.image} />
                    <h3 style={{ color: "black", margin: "10px", textAlign: "center", fontSize: "30px" }}>{prmProduct.title}</h3>
                    <p style={{ color: "black", margin: "10px ", textAlign: "center", fontSize: "14px" }}>{prmProduct.description}</p>
                    <p style={{ color: "black", margin: "10px", textAlign: "center", fontSize: "20px" }}>R$ { prmProduct.price }</p>

                </Link>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                    <button  onClick={() => removeProductToCart(prmProduct.id)} style={
                        (productsCart.map(s=>s.id).includes(prmProduct.id))
                            ? { display: "inline-block", background: "#003f69", border: "none", color: "white", padding: "6px 10px", textAlign: "center", fontSize: "24px", margin: "5px 20px 5px 5px", borderRadius: "10px", boxShadow: "5px 5px 5px grey", width: "70px"}
                            : { display: "none" }
                    }>
                        -
                    </button>
                    { qtd }x
                    <button onClick={() => addProducToCart(prmProduct)} style={{ display: "inline-block", background: "#003f69", border: "none", color: "white", padding: "6px 10px", textAlign: "center", fontSize: "24px", margin: "5px 5px 5px 20px", borderRadius: "10px", boxShadow: "5px 5px 5px grey", width: "70px"}}>
                        +
                    </button>
                    <p style={{ textAlign: "right", marginRight: "20px", fontSize: "30px" }}>R$ { qtd * prmProduct.price }
                    </p>
                </p>
            </li>

    );
}