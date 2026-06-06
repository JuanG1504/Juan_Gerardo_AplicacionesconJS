import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/pedidos'
const CLIENTES_URL = 'http://localhost:3000/clientes'
const POSTRES_URL = 'http://localhost:3000/postres'

const formInicial = {
  cliente: '',
  postre: '',
  cantidad: '1',
  fechaPedido: '',
  fechaEntrega: '',
  estado: 'Pendiente'
}

export const Pedidos = () => {
  const [pedidos, setPedidos] = useState([])
  const [clientes, setClientes] = useState([])
  const [postres, setPostres] = useState([])

  const [formData, setFormData] = useState(formInicial)
  const [editandoId, setEditandoId] = useState(null)

  const [cargando, setCargando] = useState(true)
  const [procesando, setProcesando] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  const getDatos = async () => {
    setCargando(true)

    try {
      const [
        responsePedidos,
        responseClientes,
        responsePostres
      ] = await Promise.all([
        fetch(API_URL),
        fetch(CLIENTES_URL),
        fetch(POSTRES_URL)
      ])

      if (
        !responsePedidos.ok ||
        !responseClientes.ok ||
        !responsePostres.ok
      ) {
        throw new Error('No se pudieron cargar los datos de pedidos')
      }

      const datosPedidos = await responsePedidos.json()
      const datosClientes = await responseClientes.json()
      const datosPostres = await responsePostres.json()

      setPedidos(datosPedidos)
      setClientes(datosClientes)
      setPostres(datosPostres)

    } catch (error) {
      setMensaje({
        texto: `Error: ${error.message}`,
        tipo: 'error'
      })
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    getDatos()
  }, [])

  const postreSeleccionado = postres.find(
    (postre) => postre.nombre === formData.postre
  )

  const totalCalculado = postreSeleccionado
    ? postreSeleccionado.precio * Number(formData.cantidad || 0)
    : 0

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const limpiarFormulario = () => {
    setFormData(formInicial)
    setEditandoId(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const pedidoDatos = {
      cliente: formData.cliente,
      postre: formData.postre,
      cantidad: Number(formData.cantidad),
      fechaPedido: formData.fechaPedido,
      fechaEntrega: formData.fechaEntrega,
      total: totalCalculado,
      estado: formData.estado
    }

    const estaEditando = editandoId !== null

    const url = estaEditando
      ? `${API_URL}/${editandoId}`
      : API_URL

    const metodo = estaEditando ? 'PATCH' : 'POST'

    setProcesando(true)
    setMensaje(null)

    try {
      const response = await fetch(url, {
        method: metodo,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pedidoDatos)
      })

      if (!response.ok) {
        throw new Error(
          estaEditando
            ? 'No se pudo modificar el pedido'
            : 'No se pudo registrar el pedido'
        )
      }

      setMensaje({
        texto: estaEditando
          ? 'Pedido modificado correctamente.'
          : 'Pedido registrado correctamente.',
        tipo: 'exito'
      })

      limpiarFormulario()
      await getDatos()

    } catch (error) {
      setMensaje({
        texto: `Error: ${error.message}`,
        tipo: 'error'
      })
    } finally {
      setProcesando(false)
    }
  }

  const editarPedido = (pedido) => {
    setEditandoId(pedido.id)

    setFormData({
      cliente: pedido.cliente,
      postre: pedido.postre,
      cantidad: String(pedido.cantidad),
      fechaPedido: pedido.fechaPedido,
      fechaEntrega: pedido.fechaEntrega,
      estado: pedido.estado
    })

    setMensaje({
      texto: `Modificando pedido de: ${pedido.cliente}`,
      tipo: 'informacion'
    })

    window.scrollTo(0, 0)
  }

  const cancelarEdicion = () => {
    limpiarFormulario()
    setMensaje(null)
  }

  const eliminarPedido = async (pedido) => {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar el pedido de "${pedido.cliente}"?`
    )

    if (!confirmar) {
      return
    }

    setProcesando(true)
    setMensaje(null)

    try {
      const response = await fetch(`${API_URL}/${pedido.id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar el pedido')
      }

      if (editandoId === pedido.id) {
        limpiarFormulario()
      }

      setMensaje({
        texto: 'Pedido eliminado correctamente.',
        tipo: 'exito'
      })

      await getDatos()

    } catch (error) {
      setMensaje({
        texto: `Error: ${error.message}`,
        tipo: 'error'
      })
    } finally {
      setProcesando(false)
    }
  }

  return (
    <main className="w3-black w3-text-white w3-padding-32">

     
      <header className="w3-container w3-center w3-padding-32">
        <p className="w3-text-sand w3-wide">
          ✦ CONTROL DE SOLICITUDES ✦
        </p>

        <h1 className="w3-serif w3-text-sand w3-xxxlarge">
          Pedidos
        </h1>

        <p className="w3-large w3-text-white">
          Registra y controla los pedidos realizados en
          El Club del Dulce Postre.
        </p>

      
      </header>

     
      <section className="w3-container w3-padding-16">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">

          <header className="w3-container w3-padding-16 w3-border-bottom w3-border-sand">
            <h2 className="w3-serif w3-text-sand">
              {editandoId !== null
                ? 'Modificar Pedido'
                : 'Registrar Nuevo Pedido'
              }
            </h2>

            <p className="w3-text-white">
              {editandoId !== null
                ? 'Actualiza los datos del pedido seleccionado.'
                : 'Selecciona un cliente y un postre para registrar el pedido.'
              }
            </p>
          </header>

          <form onSubmit={handleSubmit} className="w3-container w3-padding-24">

            <div className="w3-row-padding">

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Cliente
                </label>

                <select
                  className="w3-select w3-black w3-text-white w3-border w3-border-sand"
                  name="cliente"
                  value={formData.cliente}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccionar cliente
                  </option>

                  {clientes.map((cliente) => (
                    <option
                      key={cliente.id}
                      value={cliente.nombre}
                    >
                      {cliente.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Postre
                </label>

                <select
                  className="w3-select w3-black w3-text-white w3-border w3-border-sand"
                  name="postre"
                  value={formData.postre}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccionar postre
                  </option>

                  {postres.map((postre) => (
                    <option
                      key={postre.id}
                      value={postre.nombre}
                    >
                      {postre.nombre} - ${postre.precio}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w3-col l2 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Cantidad
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="number"
                  name="cantidad"
                  min="1"
                  value={formData.cantidad}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="w3-col l2 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Total
                </label>

                <input
                  className="w3-input w3-black w3-text-sand w3-border w3-border-sand"
                  type="text"
                  value={`$${totalCalculado}`}
                  readOnly
                />
              </div>

            </div>

            <div className="w3-row-padding">

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Fecha del pedido
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="date"
                  name="fechaPedido"
                  value={formData.fechaPedido}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Fecha de entrega
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="date"
                  name="fechaEntrega"
                  value={formData.fechaEntrega}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Estado
                </label>

                <select
                  className="w3-select w3-black w3-text-white w3-border w3-border-sand"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  required
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="En preparación">En preparación</option>
                  <option value="Listo para entrega">Listo para entrega</option>
                  <option value="Entregado">Entregado</option>
                  <option value="Cancelado">Cancelado</option>
                </select>
              </div>

            </div>

            <div className="w3-padding-16">
              <button
                className="w3-button w3-sand w3-large w3-margin-right"
                type="submit"
                disabled={procesando}
              >
                {procesando
                  ? 'Procesando...'
                  : editandoId !== null
                    ? 'Guardar Cambios'
                    : 'Registrar Pedido'
                }
              </button>

              {editandoId !== null && (
                <button
                  className="w3-button w3-black w3-border w3-border-sand w3-text-sand w3-large"
                  type="button"
                  onClick={cancelarEdicion}
                  disabled={procesando}
                >
                  Cancelar
                </button>
              )}
            </div>

          </form>
        </div>
      </section>

      
      {mensaje && (
        <section className="w3-container w3-padding-16">
          <div className="w3-panel w3-black w3-border w3-border-sand">
            <p className={mensaje.tipo === 'error' ? 'w3-text-white' : 'w3-text-sand'}>
              {mensaje.texto}
            </p>
          </div>
        </section>
      )}

      
      <section className="w3-container w3-padding-16">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">

          <header className="w3-container w3-padding-16 w3-border-bottom w3-border-sand">
            <h2 className="w3-serif w3-text-sand">
              Pedidos Registrados
            </h2>

            <p className="w3-text-white">
              Consulta los pedidos y actualiza su progreso de preparación.
            </p>
          </header>

          {cargando ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-sand">
                Cargando pedidos...
              </p>
            </div>
          ) : pedidos.length === 0 ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-white">
                No hay pedidos registrados actualmente.
              </p>
            </div>
          ) : (
            <div className="w3-responsive">
              <table className="w3-table w3-bordered w3-black w3-text-white">

                <thead>
                  <tr className="w3-black w3-text-sand">
                    <th>Cliente</th>
                    <th>Postre</th>
                    <th>Cantidad</th>
                    <th>Entrega</th>
                    <th>Total</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {pedidos.map((pedido) => (
                    <tr key={pedido.id}>
                      <td>{pedido.cliente}</td>
                      <td>{pedido.postre}</td>
                      <td>{pedido.cantidad}</td>
                      <td>{pedido.fechaEntrega}</td>
                      <td>${pedido.total}</td>

                      <td>
                        <span className="w3-tag w3-black w3-border w3-border-sand w3-text-sand">
                          {pedido.estado}
                        </span>
                      </td>

                      <td>
                        <button
                          className="w3-button w3-small w3-sand w3-margin-right"
                          type="button"
                          onClick={() => editarPedido(pedido)}
                          disabled={procesando}
                        >
                          Editar
                        </button>

                        <button
                          className="w3-button w3-small w3-black w3-border w3-border-sand w3-text-sand"
                          type="button"
                          onClick={() => eliminarPedido(pedido)}
                          disabled={procesando}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}

        </div>
      </section>

    </main>
  )
}