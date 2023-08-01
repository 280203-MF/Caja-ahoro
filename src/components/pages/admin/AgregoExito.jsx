import 'uikit/dist/css/uikit.min.css';
import { IconoPaloma, Continuar } from '../../atoms';

export const AgregoExito = () => {
    return (
        <>

        <div className="uk-flex uk-flex-column   uk-align-center " style={{ width: '300px', height: '280px', marginTop:'13%', boxShadow: '0 4px 6px rgba(1, 1, 1, .5)'}}>
            <div className=" uk-text-center uk-margin-top">
                <div className="uk-padding-top">
                < IconoPaloma />
                <h3 style={{marginTop:'10px', marginBottom:'60px'}}>Se ha enviado un correo para verificar cuenta</h3>
                <a href="/cajas"> < Continuar /> </a>
                </div>
            </div>
        </div>
                     
        </>
    )
}