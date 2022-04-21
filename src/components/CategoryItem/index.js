/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

export default function CategoryItem({ prmCategory }) {
    return (
        <Link to={`/categorias/${prmCategory.id}`}className="LinkCategoryItem"style={{ textDecoration: "none"}}>
             <ul className="UlCategoryItem"style={{margin:"1px",width: 250, padding:"1px",border:"1px"}}>
            {console.log(prmCategory.id)}
            <li className="LiCategoryItem"style={{ listStyle: "none", margin: "1px", width: "100%", height: 30, }}>    
                <h2 className="h2CategoryItem"style={{color:"black"}}>{prmCategory.name}</h2>
                </li>
                </ul>
        </Link>
    );
}