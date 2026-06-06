import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="w3-bar w3-black w3-border-bottom w3-border-sand w3-padding">

     
      <NavLink
        to="/"
        className="w3-bar-item w3-button w3-large w3-text-sand w3-serif"
      >
        Postres Celestiales
      </NavLink>

    
      <div className="w3-right">

        <NavLink
          to="/"
          className="w3-bar-item w3-button w3-text-sand w3-hover-sand"
        >
          Inicio
        </NavLink>

        <NavLink
          to="/postres"
          className="w3-bar-item w3-button w3-text-sand w3-hover-sand"
        >
          Postres
        </NavLink>

        <NavLink
          to="/ingredientes"
          className="w3-bar-item w3-button w3-text-sand w3-hover-sand"
        >
          Ingredientes
        </NavLink>

        <NavLink
          to="/clientes"
          className="w3-bar-item w3-button w3-text-sand w3-hover-sand"
        >
          Clientes
        </NavLink>

        <NavLink
          to="/proveedores"
          className="w3-bar-item w3-button w3-text-sand w3-hover-sand"
        >
          Proveedores
        </NavLink>

        <NavLink
          to="/empleados"
          className="w3-bar-item w3-button w3-text-sand w3-hover-sand"
        >
          Empleados
        </NavLink>

        <NavLink
          to="/pedidos"
          className="w3-bar-item w3-button w3-text-sand w3-hover-sand"
        >
          Pedidos
        </NavLink>

      </div>

    </nav>
  )
}