import React,{useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({setPresupuesto, setRestante, setCondicional}) =>{

const [cantidad,setCantidad] = useState(0)
const [error,setError] = useState(false)


const definirPresupuesto = e =>{
    setCantidad(parseInt(e.target.value,10))
}

const addPresupuesto = e =>{
    e.preventDefault();

    //validar
    if( cantidad < 1 || isNaN(cantidad) ){
        setError(true)
        return
    }

    setError(false)

    //enviarlo
    setPresupuesto(cantidad)
    setRestante(cantidad)
    setCondicional(false)
    
}

return(
        <>  
        <h2>Coloca tu presupuesto</h2>
        {error ? 
        <Error 
            mensaje="Presupuesto invalido"
        ></Error>  
        : null}
            <form 
                onSubmit={addPresupuesto}
            >
                <input 
                    onChange={definirPresupuesto} 
                    className="u-full-width"
                    type="number" 
                    placeholder="coloca tu presupuesto"
                />
                <input  
                    type="submit" 
                    className="button-primary u-full-width" 
                    value="asignar presupuesto"
                ></input>
            </form>
        </>
    )



}

Pregunta.propTypes ={
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setCondicional: PropTypes.func.isRequired
}

export default Pregunta