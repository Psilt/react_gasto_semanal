import React,{useState} from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'


const Formulario =({setGasto,setControlgasto})=>{

    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState(0)
    const [error,setError] = useState(false)

    const agregar_gasto=e=>{

        e.preventDefault()

        //validar
        if(cantidad < 1 || nombre.trim() === '' || isNaN(cantidad)){
            setError(true)
            return
        }
        setError(false)
        
        //crear el gasto

        const gasto={
            cantidad,
            nombre,
            id:shortid.generate()
        }

        //pasar
        setGasto(gasto)
        //reset
        setControlgasto(true)

        setNombre('')
        setCantidad(0)


    }

return(
    <form onSubmit={agregar_gasto}>
        <h2>Agrega tus gastos</h2>
         {error ? <Error mensaje="Todos los campos son obligatorios , o el presupuesto es invalido"></Error> : null} 
         <div className="campo">
            <label >Nombre del gasto</label>
            <input 
                onChange={e=>setNombre(e.target.value)} 
                value={nombre}
                type="text" 
                className="u-full-width" 
                placeholder="ej:transporte"
            ></input>
        </div>
        <div className="campo">
            <label >Cantidad del gasto</label>
            <input 
                onChange={e=>setCantidad(parseInt(e.target.value,10))} 
                value={cantidad}
                type="number" 
                className="u-full-width" 
                placeholder="ej:300"
            ></input>
        </div>

        <input  
            className="button-primary u-full-width"
            type="submit" 
            value="agregar gasto"
        />

    </form>

)


}
Formulario.propTypes={
    setGasto:PropTypes.func.isRequired,
    setControlgasto: PropTypes.func.isRequired
}

export default Formulario