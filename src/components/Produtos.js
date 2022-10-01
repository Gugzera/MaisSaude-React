import './Produto.css'
function Produtos (props){
    return(
        <div className="container">   
               
                <img src={props.foto} alt="" />
                    <h2>Nome: {props.nome}</h2>
                    <p>Fabricante: {props.fabricante}</p>
                    <p>Preço nas Farmácias: {props.preco}</p> 
                    <p>No posto de saúde: {props.info}</p>           
        </div>
    )
}
export default Produtos