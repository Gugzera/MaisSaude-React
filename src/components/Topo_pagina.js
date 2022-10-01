import './Topo_pagina.css'
import fundo from '.././imgs/fundo.png'
import logo from '.././imgs/logo.png'

function header (props){
    return( 
        <div className="topo">
            <img src={fundo} alt="fundo do site" className="img_fundo" />
            <div className="cima">
                <div className="titulo">
                    <img src={logo} alt="logo do site" className="logo" />
                    <h1>Mais Saúde</h1>
                </div>
                <input type="button" value="Login" className="login"/>
            </div>
            <form id="formulario">
                <h2>Entre com seus dados</h2>
                <input type="text" name="username" id="username" placeholder="Digite seu nome"
                    maxlength="30" required />
                <input type="text" name="endereco" id="endereco" placeholder="Digite seu endereço"
                    maxlength="60" required />              
                <input type="text" name="telefone" id="telefone" placeholder="Digite seu telefone"
                    maxlength="15" required />    
                <input type="text" name="cep" id="cep" placeholder="Digite seu CEP"
                    maxlength="15" required />            
                <input type="submit" value="Cadastrar" id="cadastrar" />
            </form>

        </div>
    )
}
export default header