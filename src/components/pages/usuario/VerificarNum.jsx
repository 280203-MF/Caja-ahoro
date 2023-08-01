import 'uikit/dist/css/uikit.css';
import { FlechaCel, AtrasCel, GuardarCel} from '../../atoms';


export const VerificarNum = () =>{
    return(
        <>
        <div className="uk-flex uk-flex-column uk-flex-middle " >
        
         
            < div className=" uk-flex uk-flex-between uk-width " >
                <a href="">  
                    <FlechaCel/>
                </a>    
            </div>

            <h4  style={{ color: '#0A67AB', letterSpacing: '1px', marginTop: '5%', lineHeight: '1'}} >
                Verificacion de código
            </h4>
            <p className="uk-text-center">Ingresa tu coódigo de verificación</p>

            <div className="  uk-text-center ">
                <p className="uk-text-left">Código de 6 dígitos</p>
            
                <input type="text" placeholder="Ingresa tu número celular" style={{width:'300px', height:'28px', minWidth:'270'}} />
            </div>

            <div className=' uk-width-medium '>
                <p style={{ fontSize: '14px' , marginTop:'20px',marginBottom:'8px', color:'#0A67AB'}}>Leer términos y condiciones</p>
        
                <label className="uk-form-label">
                    <input className="uk-checkbox" type="checkbox" />
                    He leído y acepto los términos así como las condiciones establecidas
                </label>

            </div>
      

            < div className="uk-position-bottom uk-flex uk-flex-between uk-width-1-1" style={{padding:'20px'}}>
                    <a href=''><AtrasCel/></a>
                    <a href=''><GuardarCel/></a>    
                </div>
        </div>

        
        
        </>
    )
}