import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

/* Admin */
import { InicioAdmin ,AltaCaja, AltaAdmin, AgregoExito , IndexAdmin, CajasAhorro, CajasUsu} from "./components/pages"

/* Admin Caja */
import { LoginCaja, IndexAcaja, DatosCaja} from "./components/pages";

/* Usuario */
import { VerificarNum, NuevaContra} from "./components/pages";


import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);



function App() {

  return (
    <>
    <Router>
      <div>
        
        <Routes>
             
            {/* Administrador */}

          <Route path="/" element={ <InicioAdmin/> }/>
          <Route path="index" element={ <IndexAdmin/> }/> 
          <Route path="altacaja" element={< AltaCaja/>} />
          <Route path="altaadmin" element={< AltaAdmin/>} />
          <Route path="guardar" element={< AgregoExito/>} />
          <Route path="cajas" element={< CajasAhorro/>} />
          <Route path="cajasusu" element={< CajasUsu/>} />

            {/* Admin Caja */}
          <Route path="logincaja" element={< LoginCaja/>} />
          <Route path="indexcaja" element={< IndexAcaja/>} />
          <Route path="datoscaja" element={< DatosCaja/>} />

            {/* Usuario */}

          <Route path="recuperar" element= { < VerificarNum/> } />
          <Route path="nuevacontra" element= { < NuevaContra/> } />


        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
