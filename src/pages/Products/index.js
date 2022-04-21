/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductItem from "../../components/ProductItem";

export default function Products() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  async function callApi() {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    catch (error) { 

    }
  } 

  return (
    <>
      <body style={{textDecoration:"none",background:"#e5e5e5",padding: "0 20px"  }}>
        <h1 style={{ fontSize: "50px", color:"black"  }}>Todos os produtos</h1>
          <ul style={{display: "flex",alignItems: "center"}}>
            <li className="item-list-products" style={{display: "flex",flexWrap: "wrap",justifyContent: "center"}}>
            {products.map((item) => (
            <ProductItem key={item.id} prmProduct={item}/>
            ))}
          </li>
          
        </ul>
        
      </body>  
    </>
  );

};