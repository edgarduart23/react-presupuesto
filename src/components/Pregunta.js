import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta =  ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [eror, guardarError] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        //console.log(e.target.value);
        //console.log(parseInt(e.target.value));
        guardarCantidad(parseInt(e.target.value, 10))
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
        // Validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        // si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }
    return(
        <Fragment>
            <h2>Coloca tu prupuesto</h2>
            {eror ? <Error mensaje="El presupuesto es Incorrecto"/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                    
                />
            </form>
        </Fragment>

    )
}
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    guardarPregunta: PropTypes.func.isRequired,

}
export default Pregunta;