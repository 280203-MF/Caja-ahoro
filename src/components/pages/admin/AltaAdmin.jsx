import 'uikit/dist/css/uikit.min.css';
import { BotonFlecha, BotonX} from '../../molecules';
import { FormAltaA } from '../../organisms';
import { BotonGuardar } from '../../atoms';



export const AltaAdmin = () => {
    return(
        <>

        <div className="uk-flex uk-flex-column uk-flex-middle " style={{padding:'20px', fontFamily:'karla'}}>
            < div className="uk-flex uk-flex-between uk-width-1-1">
                <a href="/cajas"><BotonFlecha/></a>
                <a href="/cajas"><BotonX/></a>
                
                

            </div>

            <h1 className="uk-margin-top uk-text-center uk-text-bold" style={{ fontSize: '24px' , lineHeight: '1', color: '#000000'}}>Alta Administrador</h1>

            < FormAltaA/>

            <a href="/guardar"> <BotonGuardar/> </a>
            

        </div>

        </>
    )

}