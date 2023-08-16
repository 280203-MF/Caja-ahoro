import 'uikit/dist/css/uikit.css';
import { AdminCaja } from '../../organisms';

export const LoginCaja = () => {
    return (
        <>

        <div className="uk-flex uk-flex-column uk-flex-middle uk-height-viewport">
            <h2 className="uk-text-center uk-text-bold" style={{ color: '#3874A1', letterSpacing: '1px', marginTop: '8%'}} >
                Ahorro
                <br />
                Comunitario
            </h2>

            <h6 style={{margin:'5px'}}>Administrador de Caja</h6>            

            <AdminCaja/>

        </div>

        </>
    )
}
