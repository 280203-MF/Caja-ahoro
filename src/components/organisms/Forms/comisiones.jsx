import { FormComision } from "../../molecules/form/forComision"

// eslint-disable-next-line react/prop-types
export const Comisiones = ({handleNext ,handlePrevious}) =>{
    return(
        <>
        <div className="uk-flex uk-flex-column uk-flex-middle ">
            <h1 className=" uk-text-center uk-text-bold" style={{ fontSize: '20px' , lineHeight: '1', color: '#000000'}}>Comisiones</h1>


            <FormComision/>

            <div className="uk-flex uk-flex-between uk-width-1-4 uk-margin-top">
            <button className="uk-button uk-button-default" style={{ color: '#0A67AB'}} onClick={handlePrevious}>Atrás</button>
            <button className="uk-button uk-button-default" style={{ background: '#0A67AB', color:'#fff'}} onClick={handleNext}>Continuar</button>
            </div>
        </div>
        </>
    )
}