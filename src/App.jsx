import  { useRef, useState } from "react"
import { v4 } from "uuid"
import {ButtonInput, Container, ProductDiv, ButtonDelete } from "./styles"



function App () {
const inputProdutos = useRef()
const [produtos, setProdutos] = useState([])


   function  clicarNoBotao() {

    setProdutos ([{id:v4(),name:inputProdutos.current.value}, ...produtos])

    inputProdutos.current.value = ""
    console.log(v4())
   }
   function deletarProduto(id) {
    setProdutos(produtos.filter(produto=> produto.id!==id))
   }


    return (
        <Container>
            <h1>Lista de Compras</h1>
            <input placeholder="Digite um produto" ref={inputProdutos} />
            <ButtonInput onClick={clicarNoBotao}>Cadastrar</ButtonInput>

           {
            produtos.map((produto)=>(
                <ProductDiv key={produto.id}>
                    
                <p>{produto.name}</p>
                <ButtonDelete  onClick={()=>deletarProduto(produto.id)}>🗑️</ButtonDelete >

              </ProductDiv>
            ))
              
           }
        </Container>
    )
}
export default App








