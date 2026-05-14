import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {MiComponente} from './components/MiComponente'
export const MiComponente = ()=>
{
  const s="juan perez"
  return(
    <div> saludo {nombre}</div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiComponente nombre="luis rios"/>
  </StrictMode>,
)
