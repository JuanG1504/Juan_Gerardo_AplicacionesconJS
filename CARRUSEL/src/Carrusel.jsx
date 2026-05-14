import { useState } from "react"
import { Tarjeta } from "./Tarjeta"

export const Carrusel = ({lista}) => {
    const [contador, setContador]=useState(0)
    const siguiente=()=>setContador((contador+1) % lista.length)

  return (
    <div className="carrusel">
        <Tarjeta 
        path={lista[contador].path || ""} 
        alt="" 
        titulo={lista[contador].titulo}
        descripcion={lista[contador].descripcion}
      />
      <button onClick={siguiente}>siguiente</button>
    </div>
  )
}