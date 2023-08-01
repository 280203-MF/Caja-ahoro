import 'uikit/dist/css/uikit.css';
import { FlechaCel, AtrasCel, GuardarCel} from '../../atoms';
import {RecuperarCel} from '../../organisms'


export const NuevaContra = () =>{
    return(
        <>
        <div className="uk-flex uk-flex-column uk-flex-middle " >
            < div className=" uk-flex uk-flex-between uk-width " >
                <a href="">  
                    <FlechaCel/>
                </a>    
            </div>

            <h4 className=" " style={{ color: '#0A67AB', letterSpacing: '1px', marginTop: '5%', lineHeight: '1'}} >
                Nueva contraseña
            </h4>
            
            <p className="uk-text-center" >Tu nueva contraseña debe ser diferente a las <br/> contraseñas previas</p>
            
                <RecuperarCel/>

                <ul className="    " style={{ fontSize: '12px' , lineHeight: '1' , letterSpacing: '1px'}}>
                <li>Usa al menos una letra mayúscula y minúscula</li>
                <li>Utiliza al menos 8 caracteres</li>
                <li>No incluyas datos personales</li>
                <li>Utiliza al menos un número</li>
                </ul>

                < div className="uk-position-bottom uk-flex uk-flex-between uk-width-1-1" style={{padding:'20px'}}>
                    <a href=''><AtrasCel/></a>
                    <a href=''><GuardarCel/></a>    
                </div>

        </div>
        
        </>
    )
}