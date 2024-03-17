import React from 'react';
import './App.css';
import Apresentacao from './Componentes/Apresentacao/Apresentacao'; 
import Cabecalho from './Componentes/Cabecalho/Cabecalho';
import VideoComponentes from './Componentes/ContainerVideo/ContainerVideo';
import Professores from './Componentes/Professores/Professores';
import NovosProfessores from './Componentes/NovosProfessores/NovosProfessores';
import Faq from './Componentes/ContainerInformacoes/ContainerInformacoes';
import Parceiros from './Componentes/Parceiros/Parceiros';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return ( 
    <div className="App">
      <div>
        <Cabecalho />
        </div>
          <Apresentacao />
          <div>
            <VideoComponentes/>
          </div>
            <div>
              <Professores/>
            </div>
              <div>
               <NovosProfessores/>  
              </div>
                <div>
                  < Faq/>
                  <Parceiros/>
                </div>
    </div>
  );
}

export default App;
