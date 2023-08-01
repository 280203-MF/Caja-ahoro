import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import 'uikit/dist/css/uikit.min.css';

export const FormAltaC = () => {
    return(
        <>
      <div className="uk-margin-button-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px', }} >
        <p className='uk-text-left' style={{ fontSize: '14px' , marginBottom:'-1px', color:'#000000'}} >Nombre Caja</p>
        <input type="text"  style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Municipio</p>
        <input type="text"  style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Estado</p>
        <input type="text" style={{width:'300px', height:'28px'}} />
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Ubicacion</p>
        <input type="text" style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Email</p>
        <input type="text"  style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center " style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Telefono Celular</p>
        <input type="number" style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'500px', height:'80px'}}>
        
        <p className="uk-text-middle" style={{marginTop:'30px', fontSize:'14px'}}>
        <FontAwesomeIcon icon={faCloudUploadAlt} size="1x"  style={{marginRight:'10px'}}/>
           Attach binaries by dropping them here or <a href="">selecting one</a>.</p>
      </div>
        </>
    )
}