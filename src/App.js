import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Rodape from './components/Rodape';
import './App.css';
import Topo_pagina from './components/Topo_pagina';
import alenia from './imgs/alenia.png'
import clenil from './imgs/clenil.png'
import aerolin from './imgs/aerolin.png'


function App() {
  return (
    <div className="App">
    <Topo_pagina />
    <Sobre />
    
            <h1 className="titulo_remedios">Remédios</h1>  
            <p>Alguns remédios oferecidos em postos de saúde para quem tem asma</p> 
      <Produtos foto={alenia} nome='Alenia' fabricante='Aché'  preco='R$85.00' info='R$0'/>
      <Produtos foto={clenil} nome='Cleni HFA' fabricante='Chiesi'  preco='R$65.00' info='R$0'/>
      <Produtos foto={aerolin} nome='Aerolin' fabricante='GSK'  preco='R$25.00' info='R$0' />
     
     <Rodape />
    </div>
  )
}
export default App;
