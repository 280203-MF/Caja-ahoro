import 'uikit/dist/css/uikit.min.css';
import { useState } from 'react';

export const FormBanco = () => {

    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberChange = (event) => {
        // Aquí puedes agregar lógica de validación si es necesario
        setCardNumber(event.target.value);
    };

    return(
        <>
      <div className="uk-margin-button-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px', }} >
        <p className='uk-text-left' style={{ fontSize: '14px' , marginBottom:'-1px', color:'#000000'}} >Nombre</p>
        <input type="text"  style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Numero de Cuenta de Banco</p>
        <input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="55555 55555 555555"
            maxLength="16" // Ajusta la longitud máxima según tu necesidad
            minLength="16" // Ajusta la longitud mínima según tu necesidad
            pattern="[0-9]{16}" // Patrón para aceptar solo dígitos numéricos
            required // Campo obligatorio
            style={{width:'300px', height:'28px'}}
          />
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Seleccionar Banco</p>
        
        <select name="text" style={{width:'308px', height:'30px'}}>
            <option>BBVA</option>
            <option>HSBC</option>
        </select>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'58px' }}>
        <p className='uk-text-left'  style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>RFC</p>
        <input type="text" placeholder="0FE435G34F3RCF3C3C" style={{width:'300px', height:'28px'}}/>
      </div>

        </>
    )
}