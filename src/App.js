import React,{useState,useEffect} from 'react';
import Pregunta from './Components/Pregunta'
import Formulario from './Components/Formulario'
import Listado from './Components/Listado'
import ControlPresupuesto from './Components/ControlPresupuesto'


const App =()=>{

const [presupuesto,setPresupuesto] = useState(0)
const [restante,setRestante] = useState(0)
const [condicional,setCondicional] = useState(true)
const [gastos,setGastos]=useState([])
const [gasto,setGasto]=useState({})
const [Controlgasto,setControlgasto]=useState(false)


useEffect(()=>{
  if(Controlgasto){
    setGastos([
      ...gastos,
      gasto
    ]
    )
  }
 
  const Resta = restante - gasto.cantidad
  setRestante(Resta) 
  setControlgasto(false)
},[gasto])


return(
   <div className="container">
     <header>
       <h1>Gasto Semanal</h1>
       <div className="contenido-principal contenido">
         {condicional ?(
            <Pregunta 
                setCondicional={setCondicional} 
                setPresupuesto={setPresupuesto} 
                setRestante={setRestante}
            ></Pregunta>
         ):(
          <div className="row">
                <div className="one-half column">
                  <Formulario setGasto={setGasto} setControlgasto={setControlgasto}></Formulario>
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos}></Listado>
                  <ControlPresupuesto
                   presupuesto={presupuesto}
                  restante={restante}
                  ></ControlPresupuesto>
                </div>
          </div>
         )}
       </div>
     </header>

   </div> 
)

}



export default App;
