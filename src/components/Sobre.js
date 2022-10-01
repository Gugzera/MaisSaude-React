import './Sobre.css'


function Sobre (props){
    return(
        <div className="geral">
            <div className="container_verde" >
                <div className="caixaDeTexto">
                        <h2>Sobre Nós</h2>
                        <div className="txt">
                            <p>O mais saúde é um site onde é possível encontrar informações sobre saúde no geral, em específico sobre campanhas de saúde. Como setembro Amarelo, Outubro Rosa... Nessa pagina, é possível encontrar informações sobre nosso sitema de delivery de remédios, e temos um exemplo de alguns produtos oferecidos em postos de saúde.</p>
                        </div>
                </div>
                <div className="caixaDeTexto_azul">
                        <h2>Generico ou "verdadeiro"</h2>
                        <div className="txt_azul">
                            <p>Medicamento de referência – é aquele que passou por vários anos de pesquisa em laboratório. Também é chamado de inovador, original, comercial ou ético.
                            Medicamento genérico – é idêntico ao de referência e vai funcionar da mesma forma, entretanto, não tem um nome comercial, uma marca.</p>
                        </div>
                </div>
            </div>

            <div className="container_azul">
                <div className="caixaDeTexto_azul">
                        <h2>Farmácia Popular</h2>
                        <div className="txt_azul">
                            <p>Existe també as farmacias populares, nelas os clientes recebem um bom desconto em produtos com receitaté a metade do ano de 2017, a Farmácia Popular atuava de duas maneiras: por meio da rede própria e por meio do sistema de co-pagamento (“Aqui Tem Farmácia Popular”). Acaba se tornando uma opção um pouco mais viável.</p>
                        </div>
                </div>
                <div className="caixaDeTexto">
                        <h2>Buscamos o seu Remédio</h2>
                        <div className="txt">
                            <p>Aqui, você pagará apenas um valor simbólico para nossos entregadores, e eles irão até o posto de saúde mais próximo buscar o remédio para você. Não precisa sair do conforto de sua casa, basta chamar um entregador, fornecer a receita, entregar os documentos necessários para a coleta e esperar o remédio chegar</p>
                        </div>
                </div>        
            </div>
        </div>
    )
}
export default Sobre