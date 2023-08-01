import 'uikit/dist/css/uikit.min.css';
import {FaHome, FaChartLine } from 'react-icons/fa';
import "./nav.css"

export const MenuL = () => {
  return (
    <div className="" style={{paddingLeft:'20px', height:'100%', color:'#fff'}}>
      <ul className="uk-nav " >
        <li><a href="/index" className='custom-link' style={{color:'#fff'}}><FaHome className="uk-margin-small-right" />Inicio</a></li>
        <li><a href="#" className='custom-link'style={{color:'#fff'}}><FaChartLine className="uk-margin-small-right" />Dashboard</a></li>
      </ul>
    </div>
  );
};

