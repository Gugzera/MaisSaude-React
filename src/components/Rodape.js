import './Rodape.css'
import logo from '.././imgs/logo.png'
import icone from '.././imgs/icones-rodape.png'

function Rodape (props){
    return(
        <footer className="rodape">  
            <div className="rodape_conteudo">
                
                <img src={logo} alt="logo do site" className="logo" />
                <h3>Lembre-se<br /> todos os Produtos Presicam de Prescrição médica!</h3>
                <a href="https://github.com/Gugzera" target="_blank" rel="noopener noreferrer" className="icone"><img src={icone} alt="icone do github"/> </a>
               
            </div>  
        </footer>
    )
}
export default Rodape