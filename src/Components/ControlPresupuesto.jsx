import React from 'react'
import { revisarRestante } from '../helpers'
import PropTypes from 'prop-types'

const ControlPresupuesto =({restante,presupuesto})=>{

    return(
    <>
    <div className="alert alert-primary">
            Presupuesto: ${presupuesto}
    </div>
    <div className={revisarRestante(presupuesto,restante)}>
            Restante: ${restante}
    </div>
    </>

    )
}

ControlPresupuesto.propTypes = {
    restante: PropTypes.number.isRequired,
    presupuesto: PropTypes.number.isRequired
}
export default ControlPresupuesto