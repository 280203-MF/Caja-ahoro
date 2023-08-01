import {TresPuntos} from '../../atoms';

export const SeccionCaja = () =>{
    return(
        <>
        <div className="uk-box-shadow-large " style={{marginLeft:'10%', marginRight:'10%', marginTop:'50px'}}>
                <div className="uk-grid">
                    <div className="" style={{width:'40px',height:'60px', background:'#808080', borderRadius:'10px'}}>
                        {/* Cuadro para la imagen */}
                    </div>

                    {/* Párrafo */}
                    <p>
                        Hueyo
                    </p>
                    {/* Tres puntos de opciones */}
                
                    <a href="/cajas" className=" uk-text-right" style={{textDecoration:'none', color:'#000'}}>
                        <TresPuntos/>
                    </a> 
                </div>
            </div>
        </>
    )
}