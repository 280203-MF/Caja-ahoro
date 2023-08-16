import 'uikit/dist/css/uikit.min.css';
import '../../pages/adminCaja/stepper.css';
import { useState } from 'react';

export const FormReglas = () => {

    const [showForm, setShowForm] = useState(false);

    const handleCheckboxChange = () => {
        setShowForm(!showForm);
    };

    return(
        <>
      <div className="uk-margin-button-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'100px', }} >
        <p className='uk-text-left uk-text-bold' style={{marginBottom:'-20px', fontSize:'14px'}}>1. Cuanto es el monto por numero</p>
        <p className='uk-text-left' style={{ fontSize: '14px' , marginBottom:'-1px', color:'#000000'}} >Ingresa monto</p>
        <input type="text"  style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'100px' }}>
        <p className='uk-text-left uk-text-bold' style={{marginBottom:'-20px', fontSize:'14px'}}>2. Selecciona los dias de cobro</p>
        <p className='uk-text-left'  style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Selecciona una opcion</p>
            <select name="text" style={{width:'308px', height:'30px'}}>
                <option>Lunes</option>
                <option>Martes</option>
            </select>
      </div>
      

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'130px' }}>
        
        <p className='uk-text-left uk-text-bold' style={{ fontSize:'14px'}}>3. Selecciona fecha inicio y fin de caja</p>
        
        <div className="uk-grid"> 
            <div className="uk-width-1-2">
                <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Fechas inicio</p>
                <input type="date" style={{width:'130px', height:'28px'}}/>
            </div>

            <div className="uk-width-1-2">
                <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Fecha fin</p>
                <input type="date" style={{width:'130px', height:'28px'}}/>
            </div>
        </div>
        
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'40px' }}>
        <p className='uk-text-left uk-text-bold' style={{marginBottom:'-20px', fontSize:'14px'}}>4. ¿Existen los prestamos externos?</p>

            
      </div>

      <label className="switch" id="mostrarFormulario">
                <input type="checkbox" onChange={handleCheckboxChange}></input>
                <span className="slider"></span>
            </label>

            {showForm && (
                <div >
                    <p className='uk-text-left'  style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Ingresa Interés préstamo externo</p>
                    <input type="text" style={{width:'300px', height:'28px'}}/>
                </div>
            )}

      

        </>
    )
}