
export const FormAdmin = () =>{
    return(
        <form className="uk-form-stacked uk-width-medium" >
            <div className="uk-margin">
            <label className="uk-form-label" htmlFor="email">Correo</label>
            <div className="uk-form-controls">
                <input
                className="uk-input"
                id="email"
                type="email"
                required
                />
            </div>
            </div>

            <div className="uk-margin">
            <label className="uk-form-label" htmlFor="password">Contraseña</label>
            <div className="uk-form-controls">
                <input
                className="uk-input"
                id="password"
                type="password"
                required
                />
            </div>
            </div>

            <div className="uk-margin">
            <a href="/index" className="uk-button uk-button-primary uk-width-1-1" style={{ background:'#3874A1'}}>INICIAR SESIÓN</a>
            </div>

        </form>
    )
}