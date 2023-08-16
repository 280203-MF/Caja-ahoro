import 'uikit/dist/css/uikit.min.css';


export const FormComision = () => {

    return(
        <>
      <div className="uk-margin-button-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'100px', }} >
        <p className='uk-text-left uk-text-bold' style={{marginBottom:'-20px', fontSize:'14px'}}>1. Comision por retardo</p>
        <p className='uk-text-left' style={{ fontSize: '14px' , marginBottom:'-1px', color:'#000000'}} >Retardo por numero</p>
        <input type="text"  style={{width:'300px', height:'28px'}}/>
      </div>

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'100px' }}>
        <p className='uk-text-left uk-text-bold' style={{marginBottom:'-20px', fontSize:'14px'}}>2. Interes por prestamo</p>
        <p className='uk-text-left'  style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Ingresa interes</p>
        <input type="text" style={{width:'300px', height:'28px'}}/>
      </div>
      

      <div className="uk-margin-top-none uk-width-1-1 uk-text-center" style={{width:'300px', height:'130px' }}>
        
        <p className='uk-text-left uk-text-bold' style={{ fontSize:'14px'}}>3. Préstamo máximo y mínimo por numero</p>
        
        <div className="uk-grid"> 
            <div className="uk-width-1-2">
                <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Minimo</p>
                    <select name="text" style={{width:'130px', height:'30px'}}>
                        <option>$100</option>
                        <option>$200</option>
                    </select>
            </div>

            <div className="uk-width-1-2">
                <p className='uk-text-left'style={{fontSize:'14px', marginBottom:'-1px', color:'#000000'}}>Maximo</p>
                    <select name="text" style={{width:'130px', height:'30px'}}>
                        <option>$1000</option>
                        <option>$2000</option>
                    </select>
            </div>
        </div>
        
      </div>

      

        </>
    )
}