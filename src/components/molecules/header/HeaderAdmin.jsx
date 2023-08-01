import 'uikit/dist/css/uikit.min.css';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

export const HeaderAdmin = () => {
  return (
    <div className="uk-flex uk-flex-right uk-flex-middle uk-box-shadow-small" style={{marginRight:'20px', marginTop:'10px'}}>
      {/* Nombre de usuario */}
      <div className="uk-paddigin-none uk-text-bold uk-text-right uk-margin-right" style={{fontSize:'13px'}}>
        <p style={{margin:'.5px', color:'#000'}}>Marco Flores</p>
        <a href='/' style={{ textDecoration:'none', color:'#000'}}>
          Cerrar Sesión <FaSignOutAlt />
        </a>
      </div>

        {/* Círculo para la foto */}
      <div>
        <span className="uk-icon uk-icon-large uk-border-circle">
          <FaUserCircle size={50}/>
        </span>
      </div>
      
    </div>
  );
};



