import { useState } from 'react';
import './stepper.css';
import 'uikit/dist/css/uikit.min.css';
import { DatosAhorro, Reglas, Comisiones, Banco } from '../../organisms';
import { BotonFlecha } from '../../molecules';

export const DatosCaja = () => {
  const [step, setStep] = useState(1);
  

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="App">

        < div className="uk-flex uk-flex-between uk-width-1-1">   
          <a href="indexcaja"><BotonFlecha/></a>
        </div>

      <div className="stepper">
        <div className="step-buttons">
          <button
            className={`step-button ${step === 1 ? 'active' : ''}`}
            onClick={() => handleStepChange(1)}
          >
            1
          </button>
          <button
            className={`step-button ${step === 2 ? 'active' : ''}`}
            onClick={() => handleStepChange(2)}
          >
            2
          </button>
          <button
            className={`step-button ${step === 3 ? 'active' : ''}`}
            onClick={() => handleStepChange(3)}
          >
            3
          </button>
          <button
            className={`step-button ${step === 4 ? 'active' : ''}`}
            onClick={() => handleStepChange(4)}
          >
            4
          </button>
        </div>
        <div className="step-titles">
          <div className={`step-title ${step === 1 ? 'active' : ''} uk-text-bold`}>Datos de Caja</div>
          <div className={`step-title ${step === 2 ? 'active' : ''} uk-text-bold`}>Reglas</div>
          <div className={`step-title ${step === 3 ? 'active' : ''} uk-text-bold`}>Comisiones</div>
          <div className={`step-title ${step === 4 ? 'active' : ''} uk-text-bold`}>Banco</div>
        </div>
      </div>
      
      <div className="step-content">
        {step === 1 && (
          <DatosAhorro
            handleNext={handleNextStep}
            handlePrevious={handlePreviousStep}
          />
        )}
        {step === 2 && (
          <Reglas
            handleNext={handleNextStep}
            handlePrevious={handlePreviousStep}
          />
        )}
        {step === 3 && (
          <Comisiones
            handleNext={handleNextStep}
            handlePrevious={handlePreviousStep}
          />
        )}
        {step === 4 && (
          <Banco
            handleNext={handleNextStep}
            handlePrevious={handlePreviousStep}
          />
        )}
      </div>
    </div>
  );
}
