/* eslint-disable no-unused-vars */
import React, {useEffect,  useState } from 'react'
import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "../../components/Header/CartIcon";
import CategoryItem from "../CategoryItem"
import logodeuno from '../../assets/logodeuno.png';
import api from '../../services/api';
import "./style.scss";

export default function Header  ()  {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        callCategories();
    }, []);

   
    async function callCategories() {
        
        try {
          const response = await api.get("/categories");
            setCategories(response.data);
            console.log(response.data);
         }
        catch (error) { 
            console.log(error);
            
        }
      } 
    
    

    return (
        <section id="header">
            
            <Navbar expand="lg">
                <Container id="home">
                    <Navbar.Brand className="nav-brand">
                        <a href="/">
                            <img src={logodeuno} alt="" width={60} />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Collapse className="menu">
                        <Nav className="items">
                            <Nav.Link as={Link} to={"/"}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/produtos"}>
                                Produtos
                            </Nav.Link>
                            <NavDropdown title="Categorias" className="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/categoria/"}>
                                    <ul style={{listStyle: "none",padding:"1px"}}>
                                        {categories.map((item) => (
                                            <li style={{listStyle: "none",padding:"1px"}}>
                                               < CategoryItem key={item.id} prmCategory={item}/> 
                                            </li>
                                        ))}
                                    </ul>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link style={{ whiteSpace: "nowrap" }} as={Link} to={"/sobreNos"}>
                                Sobre nós
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/administracao"}>
                                Administração
                            </Nav.Link>
                            <Nav.Link className="car" as={Link} to={"/cart"}>
                                <CartIcon />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

