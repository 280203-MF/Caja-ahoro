import 'uikit/dist/css/uikit.min.css';
import { MenuL, HeaderAdmin, SeccionCaja} from '../../molecules';
import { FechaActual, Mas, Buscador, Lupa} from '../../atoms';

export const IndexAdmin = () =>{
    return(
        <>

        <div className="uk-flex uk-flex-top" >
            <div className='uk-flex uk-width-1-6@m uk-visible@m ' style={{height:'100vh' , background:'#3874A1'}}> 
                <MenuL/>
            </div>
            <div className="uk-flex-1 ">
            <HeaderAdmin />
            
            <div className='uk-flex uk-margin-left uk-margin-top uk-flex-between'>
                    <h2 className='uk-text-bold' style={{fontSize:'20px', marginLeft:'15px', paddingBottom:'none'}}>Cajas de ahorro</h2>
                    <FechaActual className="uk-margin-small-right" />
            </div>

            <div className="uk-margin" style={{marginLeft:'30px', paddingTop:'20px'}}> 
                <Buscador/>
                <button className="uk-button uk-button-default" style={{ border:'none'}}> <Lupa /> </button>
                <a href='/altacaja' className="uk-margin-left uk-text-bold" style={{paddingLeft:'80px', textDecoration:'none', color:'#000'}}>
                <Mas />Nueva caja
                </a>
            </div>

            
            <SeccionCaja/>
            
            </div>
        </div>
        </>
    )
}