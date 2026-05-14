import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {MiComponente} from '/components/MiComponente.jsx'
import Saludo from '/components/Saludo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

export function MiComponente() {
  const carreras =["isc", "ico", "idun"]
return(<div><saludo name="juan"/><saludo name="ana"/>
<ul>{carreras.map((x)=<li>{x}</li>)}</ul></div>)  
}
export default MiComponente

export Saludo=({name})=>{

  return(
    <saludo>
      hola{name}
    </saludo>
  )
}
