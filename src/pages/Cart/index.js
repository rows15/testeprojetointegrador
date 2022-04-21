
import CartItem from "../../components/CartItem";
import "./style.scss";

import React, { useContext } from "react";
import { CartContext } from "../../context/cart";

export default function Cart() {
  const {
    productsCart,
    clearCart
  } = useContext(CartContext);

  let somatoria = 0;
  productsCart.map((item) => (
    somatoria += item.qtd * item.product.price
  ));

  return (
    <section id="carrinho">
      <div>
        <h2>Produtos no carrinho de compras</h2>

        <p class="vazio">
          {
            productsCart.length == 0
              ? "🛒 Carrinho vazio"
              : <button onClick={() => clearCart()} style={{ display: "inline-block", position: "fixed", right: "20px", top: "40px", background: "#003f69", border: "none", color: "white", padding: "6px 10px", textAlign: "center", fontSize: "24px", margin: "5px 5px 5px 20px", borderRadius: "10px", boxShadow: "5px 5px 5px grey", width: "170px"}}>
                  Limpar carrinho
                </button>
          }
        </p>

        
        {productsCart.map((item) => (
          <>
            <CartItem key={item.id} prmProduct={item.product} />
          </>
        ))}

        <p style={{ fontSize: "30px" }}>
          Total: R$ { somatoria }
        </p>
      </div>
    </section>
  );
}