import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import 'uikit/dist/css/uikit.min.css';

export const FormAltaA = () => {
    return(
        <>
        <div className="uk-margin-button-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px', }} >
        <p className='uk-text-left' style={{ fontSize: '14px' , marginBottom:'-1px', color:'#000000'}} >Nombre Admin</p>
        <input type="text"  style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Apellido Paterno</p>
        <input type="text"  style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Apellido Materno</p>
        <input type="text" style={{width:'300px', height:'28px'}} />
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>RFC</p>
        <input type="text" style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Correo</p>
        <input type="text"  style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center " style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Telefono</p>
        <input type="number" style={{width:'300px', height:'28px'}}/>
      </div>

       <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Credencial</p>
       
       
        <label htmlFor="fileInput" className="uk-flex uk-flex-column uk-flex-middle">
        
            <div className="uk-width-medium uk-height-medium uk-background-contain uk-background-center uk-flex uk-flex-center uk-flex-middle" style={{ backgroundImage: 'url(ruta/imagen/nube.png)',width:'70px', height:'70px', border:'solid .5px #000'}}>
            <FontAwesomeIcon icon={faCloudUploadAlt} size="2x"  />
            </div>
            <span className="uk-text">Subir foto</span>
        </label>
        <input id="fileInput" type="file" className="uk-hidden"/>

    
        </>
    )
}