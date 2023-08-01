
import { HeaderAdmin, BotonFlecha, MenuAU} from '../../molecules';
import {Buscador, Mas, Filtro} from '../../atoms';
import { TablaAdmin } from '../../organisms';

export const CajasAhorro = () => {
    return(
        <>
            <HeaderAdmin/>

            <div className='uk-flex  uk-flex uk-flex-middle' style={{fontSize:'20px', marginLeft:'15px'}}>
                <a href="/index" style={{marginTop:'15px', paddingLeft:'5%'}}><BotonFlecha/></a> 
                <h4 className='uk-text-bold'>Caja de ahorro Santo Tomas</h4>
            </div>

            <div style={{paddingLeft:'10%'}} >
                <MenuAU/>
            </div>

            <div className="uk-margin" style={{marginLeft:'5%', paddingLeft:'5%'}}> 
                <Buscador/>
                <button className="uk-button uk-button-default" style={{ border:'none'}}> <Filtro /> </button>
                <a href='/altaadmin' className="uk-margin-left uk-text-bold" style={{paddingLeft:'80px', textDecoration:'none', color:'#000'}}>
                <Mas />Nuevo Admin</a>
            </div>

            <div className="uk-container uk-overflow-auto ">
                <TablaAdmin/>
            </div>

            
        </>
    )
}