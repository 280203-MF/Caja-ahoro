import 'uikit/dist/css/uikit.min.css';

import { FaUserCircle,FaSignOutAlt } from 'react-icons/fa';

export const MenuAcaja = () => {
  return (
    <>
    <div className="" style={{ height:'100%',width:'99%', background:'#3874A1'}}>

        {/* <div className='uk-flex uk-flex-middle uk-margin-left' style={{paddingLeft:'23%', paddingTop:'5px'}}>
            <span className="uk-icon uk-icon-large uk-border-circle">
            <FaUserCircle size={90}/>
            </span>
        </div> */}


         <ul className="uk-nav" style={{padding:'10px', marginTop:'10%'}}>
            <li><a href="" className='uk-button uk-flex uk-flex-center uk-padding-remove'style={{background:'#D1D5DB', marginBottom:'10px', borderRadius:'20px', color:'#000'}}>Mis Colaboradores</a></li>
            <li><a href="" className='uk-button uk-flex uk-flex-center uk-padding-remove'style={{background:'#D1D5DB', marginBottom:'10px', borderRadius:'20px', color:'#000'}}>Usuarios Ahorradores</a></li>
            <li><a href="" className='uk-button uk-flex uk-flex-center uk-padding-remove'style={{background:'#6091C3', marginBottom:'10px', borderRadius:'20px', color:'#fff'}}>Corte de Caja</a></li>
            <li><a href="" className='uk-button uk-flex uk-flex-center uk-padding-remove'style={{background:'#D1D5DB', borderRadius:'20px', color:'#000'}}>Datos de Caja</a></li>
        </ul> 

        <div className='uk-position-bottom uk-flex uk-flex-middle uk-padding uk-text-bold'>
            <div className="uk-text-right" style={{fontSize:'13px'}}>
                <p style={{margin:'.5px', color:'#000'}}>Marco Flores</p>
                <a href='logincaja' style={{ textDecoration:'none', color:'#000'}}>
                Cerrar Sesión <FaSignOutAlt />
                </a>
            </div>

            <div >
                <span className="uk-icon uk-icon-large uk-border-circle uk-margin-left">
                <FaUserCircle size={50}/>
                </span>
            </div>
        </div>

        
    </div>

    

    </>
  );
};

