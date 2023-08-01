
export const FechaActual = () => {
  // Obtener la fecha actual
  const fechaActual = new Date();

  // Formatear la fecha en una cadena legible
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = fechaActual.toLocaleDateString('es-ES', options);

  return (
      <div className="uk-text-right" style={{marginRight:'40px'}}>
        
        {fechaFormateada}
      </div>
  );
};

