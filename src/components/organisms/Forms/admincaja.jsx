
export const AdminCaja = () =>{
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

            <a href="">
            <p className="uk-text-right" style={{fontSize:'13px', color:'#3874A1'}}>¿Has olvidado tu contraseña?</p>
            </a>
            

            <div className="uk-margin">
            <a href="/indexcaja" className="uk-button uk-button-primary uk-width-1-1" style={{ background:'#3874A1'}}>INICIAR SESIÓN</a>
            </div>

        </form>
    )
}