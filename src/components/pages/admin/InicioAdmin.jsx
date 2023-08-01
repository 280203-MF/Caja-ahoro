import 'uikit/dist/css/uikit.css';
import { FormAdmin } from '../../organisms';

export const InicioAdmin = () => {
    return (
        <>

        <div className="uk-flex uk-flex-column uk-flex-middle uk-height-viewport">
            <h2 className="uk-text-center uk-text-bold" style={{ color: '#3874A1', letterSpacing: '1px', marginTop: '10%'}} >
                Ahorro
                <br />
                Comunitario
            </h2>
            <FormAdmin/>
        </div>

        </>
    )
}
