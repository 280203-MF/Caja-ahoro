import 'uikit/dist/css/uikit.css';

export const RecuperarCel = () =>{
    return(
        <>
            <form className="uk-form-stacked uk-width-medium ">
                <div className="uk-margin">
                <label className="uk-form-label" htmlFor="password">Contraseña</label>
                <div className="uk-form-controls">
                    <input
                    className="uk-input"
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    required
                    />
                </div>
                </div>

                <div className="uk-margin">
                <label className="uk-form-label" htmlFor="password">Confirmar tu contraseña</label>
                <div className="uk-form-controls">
                    <input
                    className="uk-input"
                    id="password2"
                    type="password"
                    placeholder="Contraseña"
                    required
                    />
                </div>
                </div>
 
            </form>
        </>
    )
}