import '../../pages/adminCaja/stepper.css';
import { useState } from 'react';
import { FormBanco } from '../../molecules';

// eslint-disable-next-line react/prop-types
export const Banco = ({handleNext ,handlePrevious}) =>{

    const [showForm, setShowForm] = useState(false);

    const handleCheckboxChange = () => {
        setShowForm(!showForm);
    };

    return(
        <>
        <div className="uk-flex uk-flex-column uk-flex-middle ">
            <h1 className="uk-text-center uk-text-bold" style={{ fontSize: '20px' , lineHeight: '1', color: '#000000'}}>Banco</h1>
            <p>Su caja va a aceptar transferencias o cobros?</p>

            <label className="switch" id="mostrarFormulario">
                <input type="checkbox" onChange={handleCheckboxChange}></input>
                <span className="slider"></span>
            </label>

            {showForm && (
                <div className="uk-flex uk-flex-column uk-flex-middle  ">
                    <FormBanco/>
                </div>
            )}

            <div className="uk-flex uk-flex-between uk-width-1-4" style={{marginTop:'5%'}}>
                <button className="uk-button uk-button-default" style={{ color: '#0A67AB'}} onClick={handlePrevious}>Atrás</button>
                <button className="uk-button uk-button-default" style={{ background: '#0A67AB', color:'#fff'}} onClick={handleNext}>Finalizar</button>
            </div>
        </div>
        </>
    )
}