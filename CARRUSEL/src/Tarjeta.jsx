export const Tarjeta = ({path, titulo, descripcion}) => {
  return (
    <div className="tarjeta">
        <img src={path} alt={titulo} />
        <p className="descripcion">{descripcion}</p>
        
    </div>
  )
}