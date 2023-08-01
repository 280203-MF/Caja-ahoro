import "./nav.css"

export const MenuAU = () =>{
    return(
        <>
        <div>
            <ul className="uk-subnav uk-flex uk-flex-between-2" >
                <li ><a href="/cajas" className="custom">Administradores</a></li>
                <li ><a href="/cajasusu" className='custom'>Usuarios</a></li>
            </ul>
        </div>
            
        </>
    )
}