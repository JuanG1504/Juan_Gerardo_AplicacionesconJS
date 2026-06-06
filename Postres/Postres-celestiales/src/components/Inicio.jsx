import { NavLink } from 'react-router-dom'

export const Inicio = () => {
  return (
    <main className="w3-black w3-text-white">

      
      <section className="w3-container w3-center w3-padding-64">
        <div className="w3-content">

          <p className="w3-text-sand w3-wide w3-large">
            ✦ SISTEMA INTERNO DE ADMINISTRACIÓN ✦
          </p>

          <h1 className="w3-jumbo w3-serif w3-text-sand">
            Postres Celestiales
          </h1>

          <p className="w3-xlarge w3-serif w3-text-white">
            Elegancia, orden y dulzura en cada detalle.
          </p>

          <p className="w3-large w3-text-sand">
            Panel interno para la administración de productos, inventario,
            clientes, proveedores y personal de la tienda.
          </p>

          <div className="w3-padding-32">
            <NavLink
              to="/postres"
              className="w3-button w3-sand w3-large w3-padding-large w3-margin-right"
            >
              Gestionar Postres
            </NavLink>

            <NavLink
              to="/ingredientes"
              className="w3-button w3-black w3-border w3-border-sand w3-text-sand w3-large w3-padding-large"
            >
              Revisar Inventario
            </NavLink>
          </div>

        </div>
      </section>

   
     
<section className="w3-container w3-padding-32">
  <div className="w3-content">

    <div className="w3-center w3-margin-bottom">
      <h2 className="w3-serif w3-text-sand">
        Módulos de Gestión
      </h2>

      <p className="w3-text-white">
        Selecciona el área de trabajo que deseas administrar.
      </p>
    </div>

    <div className="w3-row-padding">

      
      <div className="w3-col l4 m6 s12 w3-margin-bottom">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">
          <div className="w3-container w3-center w3-padding-32">
            <p className="w3-jumbo w3-text-sand w3-serif">
              ♛
            </p>

            <h3 className="w3-serif w3-text-sand">
              Postres
            </h3>

            <p className="w3-text-white">
              Administra el catálogo, precios, tamaños y disponibilidad.
            </p>

            <NavLink
              to="/postres"
              className="w3-button w3-sand w3-margin-top"
            >
              Abrir módulo
            </NavLink>
          </div>
        </div>
      </div>

      
      <div className="w3-col l4 m6 s12 w3-margin-bottom">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">
          <div className="w3-container w3-center w3-padding-32">
            <p className="w3-jumbo w3-text-sand w3-serif">
              ❧
            </p>

            <h3 className="w3-serif w3-text-sand">
              Ingredientes
            </h3>

            <p className="w3-text-white">
              Consulta existencias, cantidades y origen de suministros.
            </p>

            <NavLink
              to="/ingredientes"
              className="w3-button w3-sand w3-margin-top"
            >
              Abrir módulo
            </NavLink>
          </div>
        </div>
      </div>

     
      <div className="w3-col l4 m6 s12 w3-margin-bottom">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">
          <div className="w3-container w3-center w3-padding-32">
            <p className="w3-jumbo w3-text-sand w3-serif">
              ♡
            </p>

            <h3 className="w3-serif w3-text-sand">
              Clientes
            </h3>

            <p className="w3-text-white">
              Registra y actualiza información de contacto de clientes.
            </p>

            <NavLink
              to="/clientes"
              className="w3-button w3-sand w3-margin-top"
            >
              Abrir módulo
            </NavLink>
          </div>
        </div>
      </div>

    
      <div className="w3-col l4 m6 s12 w3-margin-bottom">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">
          <div className="w3-container w3-center w3-padding-32">
            <p className="w3-jumbo w3-text-sand w3-serif">
              ♧
            </p>

            <h3 className="w3-serif w3-text-sand">
              Pedidos
            </h3>

            <p className="w3-text-white">
              Registra solicitudes, entregas y estados de preparación.
            </p>

            <NavLink
              to="/pedidos"
              className="w3-button w3-sand w3-margin-top"
            >
              Abrir módulo
            </NavLink>
          </div>
        </div>
      </div>
 
      <div className="w3-col l4 m6 s12 w3-margin-bottom">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">
          <div className="w3-container w3-center w3-padding-32">
            <p className="w3-jumbo w3-text-sand w3-serif">
              ⚜
            </p>

            <h3 className="w3-serif w3-text-sand">
              Proveedores
            </h3>

            <p className="w3-text-white">
              Organiza contactos y estados de abastecimiento.
            </p>

            <NavLink
              to="/proveedores"
              className="w3-button w3-sand w3-margin-top"
            >
              Abrir módulo
            </NavLink>
          </div>
        </div>
      </div>

     
      <div className="w3-col l4 m6 s12 w3-margin-bottom">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">
          <div className="w3-container w3-center w3-padding-32">
            <p className="w3-jumbo w3-text-sand w3-serif">
              ♜
            </p>

            <h3 className="w3-serif w3-text-sand">
              Empleados
            </h3>

            <p className="w3-text-white">
              Gestiona puestos, turnos y datos del personal.
            </p>

            <NavLink
              to="/empleados"
              className="w3-button w3-sand w3-margin-top"
            >
              Abrir módulo
            </NavLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      

     
      <footer className="w3-container w3-center w3-black w3-padding-24 w3-border-top w3-border-sand">
        <p className="w3-text-sand w3-serif w3-large">
          Postres Celestiales
        </p>

        <p className="w3-text-white">
          Sistema interno de administración
        </p>
      </footer>

    </main>
  )
}