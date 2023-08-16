
import { FormAltaC } from '../../organisms';
import { AtrasCel} from '../../atoms';

// eslint-disable-next-line react/prop-types
export const DatosAhorro = ({handleNext,handlePrevious }) =>{
    return(
        <>

        <div className="uk-flex uk-flex-column uk-flex-middle uk-margin-top-delete ">
            <h1 className=" uk-text-center uk-text-bold" style={{ fontSize: '20px' , lineHeight: '1', color: '#000000'}}>Alta de caja de ahorro</h1>
            <FormAltaC/>
            <div className="uk-flex uk-flex-between uk-width-1-4 uk-margin-top">
                <a href="indexcaja"  onClick={handlePrevious}><AtrasCel/></a>
                <button className="uk-button uk-button-default" style={{ background: '#0A67AB', color:'#fff'}} onClick={handleNext}>Continuar</button>
            </div>
        </div>

        </>
    )
}