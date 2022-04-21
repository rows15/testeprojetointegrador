import { useState, useEffect } from 'react';
import { ModalHeader } from 'react-bootstrap';
import api from '../../services/api';
import './style.scss'







const Administration = () => {

    const handleClick = () => {
        
        if ((loginVar == "brasil") & (passowrdVar == "senha")){
            alert("usuario e senha certos")
            setShow(true)
                    
        } else {
            alert("Usuário e(ou) senha errado")
        }

       
                     /* window.location.href = `https://www.google.com/search?q=${loginVar}`; */
                     
       
                     
                     
                    };
    
    const [showAdminControls,setShow] = useState(false)
    const [loginVar,setLoginVar] = useState(null)
    const [passowrdVar,setpassowrdVar] = useState(null)
    
    function getLogin(val){

        setLoginVar(val.target.value)
        console.log(val.target.value)   

    }
    function getPassword(event){

        setpassowrdVar(event.target.value)
        console.log(event.target.value)   

    }

    //Funcoes no Painel de admin




    const [id,setId] = useState(null)
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(null)
    const [categoryId,setCategoryId] = useState(null)
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")

    const [idDelete,setIdDelete] = useState(null)



    //CadastrarProduto
    async function saveProduct(body) {
      try {
          await api.post("/products", body);
          alert("Produto cadastrado com sucesso");
          
        } catch (error) {
          alert("Erro no cadastro do Produto");
        }
  }

  async function newProduct(event) {
      event.preventDefault();
      if (!title || !categoryId || !price) {
        alert("Favor preencher todos os campos");
      } else {
        const body = {
          title: title,
          price: price,
          categories: [{id: categoryId}],
          description: description,
          image: image,
        };
        saveProduct(body);
      }
    }


    //EditarProduto
    async function updateProduct(body) {
      try {
          await api.put(`/products/${id}`, body);
          alert("Produto Atualizado");
        } catch (error) {
          alert("Erro ao atualizar");
        }
    }

    async function editProduct(event) {
      event.preventDefault();
      if (!title || !categoryId || !price) {
        alert("Favor preencher todos os campos");
      } else {
        const body = {
          title: title,
          price: price,
          categories: [{id: categoryId}],
          description: description,
          image: image,
        };
        
        updateProduct(body);
      }
    }




      //Deletar Produtos

      async function deleteProduct(event) {
        event.preventDefault();
        if (!idDelete){
          alert("Favor preencher todos os campos");
        }else{
        try {
            await api.delete(`/products/${idDelete}`);
            alert("Produto Deletado");
          } catch (error) {
            alert("Erro ao Deletar");
          }}
      }
  
      
          
       




      //PegarListaCategorias

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
        <>
        
        {showAdminControls?<><h2 className='textoPainel' >PAINEL DE ADM</h2>
        
        <div className="AdminContainer">
            <div className="AdminBody">
                <form id='FormCadastroAlteracao' onSubmit={id?editProduct:newProduct}>
                    <h2>Cadastro/Edição de produtos</h2>
                    <div className="inputs">
                    <label>
                        <span>Id</span>
                        <input
                            value={id}
                            onChange={(event) => setId(event.target.value)}
                        />
                        </label>

                        <label>
                        <span>Título</span>
                        <input
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        </label>
                        <label>
                        <span>Descrição</span>
                        <textarea

                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        </label>

                        <label>
                        <span>Imagem</span>
                        <input
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                        />
                        </label>
                        <div>
                            <label>
                                <span>Preço</span>
                                <input
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                />
                            </label>
                            <label>
                            <span>Categoria</span>
                            <select value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
                                <option></option>
                                {categories.map((category) => (
                                <option value={category.id}>{category.name}</option>
                                ))}
                            </select>
                            </label>
                            <div className="container-buttons">
                                <button className="botao-rows" type="submit">{!id ? "Salvar" : "Alterar"}</button>
                                
                            </div>
                        </div>
                    </div>






                </form>
                <form onSubmit={deleteProduct}>
                <label>
                        <span>Id para Deletar</span>
                        <input
                            value={idDelete}
                            onChange={(event) => setIdDelete(event.target.value)}
                        />
                        </label>
                        <div className="container-buttons">
                                <button className="botao-rows" type="submit">{"Deletar"} </button>
                                
                            </div>




                </form>





            </div>  








        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>:<> 

        <input id="login" type="text" placeholder="Enter Username" name="uname" onChange={getLogin} required/>
        <input id="password" type="password" placeholder="Enter Password" name="psw" onChange={getPassword} required/>
        
        <button className="botao-rows" onClick={handleClick}>  Login</button>
        </>
        
    }
        

        

        </>
        
    );
           
}

export default Administration;