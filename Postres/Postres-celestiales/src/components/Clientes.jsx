import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/clientes'

const formInicial = {
  nombre: '',
  telefono: '',
  correo: '',
  direccion: ''
}

export const Clientes = () => {
  const [clientes, setClientes] = useState([])
  const [formData, setFormData] = useState(formInicial)
  const [editandoId, setEditandoId] = useState(null)

  const [cargando, setCargando] = useState(true)
  const [procesando, setProcesando] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  const getClientes = async () => {
    setCargando(true)

    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('No se pudieron obtener los clientes')
      }

      const data = await response.json()
      setClientes(data)

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
    getClientes()
  }, [])

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

    const clienteDatos = {
      nombre: formData.nombre,
      telefono: formData.telefono,
      correo: formData.correo,
      direccion: formData.direccion
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
        body: JSON.stringify(clienteDatos)
      })

      if (!response.ok) {
        throw new Error(
          estaEditando
            ? 'No se pudo modificar el cliente'
            : 'No se pudo agregar el cliente'
        )
      }

      setMensaje({
        texto: estaEditando
          ? 'Cliente modificado correctamente.'
          : 'Cliente agregado correctamente.',
        tipo: 'exito'
      })

      limpiarFormulario()
      await getClientes()

    } catch (error) {
      setMensaje({
        texto: `Error: ${error.message}`,
        tipo: 'error'
      })
    } finally {
      setProcesando(false)
    }
  }

  const editarCliente = (cliente) => {
    setEditandoId(cliente.id)

    setFormData({
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      correo: cliente.correo,
      direccion: cliente.direccion
    })

    setMensaje({
      texto: `Modificando: ${cliente.nombre}`,
      tipo: 'informacion'
    })

    window.scrollTo(0, 0)
  }

  const cancelarEdicion = () => {
    limpiarFormulario()
    setMensaje(null)
  }

  const eliminarCliente = async (cliente) => {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar al cliente "${cliente.nombre}"?`
    )

    if (!confirmar) {
      return
    }

    setProcesando(true)
    setMensaje(null)

    try {
      const response = await fetch(`${API_URL}/${cliente.id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar el cliente')
      }

      if (editandoId === cliente.id) {
        limpiarFormulario()
      }

      setMensaje({
        texto: 'Cliente eliminado correctamente.',
        tipo: 'exito'
      })

      await getClientes()

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
          ✦ REGISTRO Y ATENCIÓN ✦
        </p>

        <h1 className="w3-serif w3-text-sand w3-xxxlarge">
          Clientes
        </h1>

        <p className="w3-large w3-text-white">
          Gestiona la información de contacto de los clientes de
          Postres Celestiales.
        </p>

       
      </header>

      <section className="w3-container w3-padding-16">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">

          <header className="w3-container w3-padding-16 w3-border-bottom w3-border-sand">
            <h2 className="w3-serif w3-text-sand">
              {editandoId !== null
                ? 'Modificar Cliente'
                : 'Agregar Nuevo Cliente'
              }
            </h2>

            <p className="w3-text-white">
              {editandoId !== null
                ? 'Actualiza la información del cliente seleccionado.'
                : 'Ingresa los datos necesarios para registrar un nuevo cliente.'
              }
            </p>
          </header>

          <form onSubmit={handleSubmit} className="w3-container w3-padding-24">

            <div className="w3-row-padding">

              <div className="w3-col l3 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Nombre completo
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="María López"
                  required
                />
              </div>

              <div className="w3-col l3 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Teléfono
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="9381234567"
                  required
                />
              </div>

              <div className="w3-col l3 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Correo electrónico
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="cliente@gmail.com"
                  required
                />
              </div>

              <div className="w3-col l3 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Dirección
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Av. Central #120"
                  required
                />
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
                    : 'Agregar Cliente'
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
              Clientes Registrados
            </h2>

            <p className="w3-text-white">
              Consulta la información actual y administra cada registro.
            </p>
          </header>

          {cargando ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-sand">
                Cargando clientes...
              </p>
            </div>
          ) : clientes.length === 0 ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-white">
                No hay clientes registrados actualmente.
              </p>
            </div>
          ) : (
            <div className="w3-responsive">
              <table className="w3-table w3-bordered w3-black w3-text-white">

                <thead>
                  <tr className="w3-black w3-text-sand">
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Dirección</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {clientes.map((cliente) => (
                    <tr key={cliente.id}>
                      <td>{cliente.nombre}</td>
                      <td>{cliente.telefono}</td>
                      <td>{cliente.correo}</td>
                      <td>{cliente.direccion}</td>

                      <td>
                        <button
                          className="w3-button w3-small w3-sand w3-margin-right"
                          type="button"
                          onClick={() => editarCliente(cliente)}
                          disabled={procesando}
                        >
                          Editar
                        </button>

                        <button
                          className="w3-button w3-small w3-black w3-border w3-border-sand w3-text-sand"
                          type="button"
                          onClick={() => eliminarCliente(cliente)}
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