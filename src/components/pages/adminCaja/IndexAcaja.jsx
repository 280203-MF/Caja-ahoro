import 'uikit/dist/css/uikit.min.css';
import { MenuAcaja} from '../../organisms';
import { FechaActual, ConAdmCaja} from '../../atoms';

export const IndexAcaja = () =>{
    return(
        <>

        <div className="uk-flex uk-flex-top" >
            <div className='uk-flex uk-width-1-6@m uk-visible@m uk-box-shadow-large' style={{height:'100vh', width:'18%'}}> 
                <MenuAcaja/>
            </div>
            <div className="uk-flex-1 ">
           
            
                <div className='uk-flex uk-margin-left uk-margin-top uk-flex-between'>
                        <h2 className='uk-text-bold' style={{fontSize:'20px', marginLeft:'15px', paddingBottom:'none'}}>Mi Caja de ahorro</h2>
                        <FechaActual className="uk-margin-small-right" />
                </div>

                <div className='uk-text-center uk-margin-xlarge-top'>
                    <h5>Hola Marco, faltan datos por configurar </h5>
                    <a href="datoscaja"><ConAdmCaja/></a>
                </div>
                        
            </div>
        </div>
        </>
    )
}