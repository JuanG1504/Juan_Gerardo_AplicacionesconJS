import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/proveedores'

const formInicial = {
  nombre: '',
  telefono: '',
  correo: '',
  direccion: '',
  contacto: '',
  estado: 'Activo'
}

export const Proveedores = () => {
  const [proveedores, setProveedores] = useState([])
  const [formData, setFormData] = useState(formInicial)
  const [editandoId, setEditandoId] = useState(null)

  const [cargando, setCargando] = useState(true)
  const [procesando, setProcesando] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  const getProveedores = async () => {
    setCargando(true)

    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('No se pudieron obtener los proveedores')
      }

      const data = await response.json()
      setProveedores(data)

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
    getProveedores()
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

    const proveedorDatos = {
      nombre: formData.nombre,
      telefono: formData.telefono,
      correo: formData.correo,
      direccion: formData.direccion,
      contacto: formData.contacto,
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
        body: JSON.stringify(proveedorDatos)
      })

      if (!response.ok) {
        throw new Error(
          estaEditando
            ? 'No se pudo modificar el proveedor'
            : 'No se pudo agregar el proveedor'
        )
      }

      setMensaje({
        texto: estaEditando
          ? 'Proveedor modificado correctamente.'
          : 'Proveedor agregado correctamente.',
        tipo: 'exito'
      })

      limpiarFormulario()
      await getProveedores()

    } catch (error) {
      setMensaje({
        texto: `Error: ${error.message}`,
        tipo: 'error'
      })
    } finally {
      setProcesando(false)
    }
  }

  const editarProveedor = (proveedor) => {
    setEditandoId(proveedor.id)

    setFormData({
      nombre: proveedor.nombre,
      telefono: proveedor.telefono,
      correo: proveedor.correo,
      direccion: proveedor.direccion,
      contacto: proveedor.contacto,
      estado: proveedor.estado
    })

    setMensaje({
      texto: `Modificando: ${proveedor.nombre}`,
      tipo: 'informacion'
    })

    window.scrollTo(0, 0)
  }

  const cancelarEdicion = () => {
    limpiarFormulario()
    setMensaje(null)
  }

  const eliminarProveedor = async (proveedor) => {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar al proveedor "${proveedor.nombre}"?`
    )

    if (!confirmar) {
      return
    }

    setProcesando(true)
    setMensaje(null)

    try {
      const response = await fetch(`${API_URL}/${proveedor.id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar el proveedor')
      }

      if (editandoId === proveedor.id) {
        limpiarFormulario()
      }

      setMensaje({
        texto: 'Proveedor eliminado correctamente.',
        tipo: 'exito'
      })

      await getProveedores()

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
          ✦ ABASTECIMIENTO Y CONTACTOS ✦
        </p>

        <h1 className="w3-serif w3-text-sand w3-xxxlarge">
          Proveedores
        </h1>

        <p className="w3-large w3-text-white">
          Gestiona a los proveedores responsables de los insumos y
          materiales de Postres Celestiales.
        </p>

         
      </header>

   
      <section className="w3-container w3-padding-16">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">

          <header className="w3-container w3-padding-16 w3-border-bottom w3-border-sand">
            <h2 className="w3-serif w3-text-sand">
              {editandoId !== null
                ? 'Modificar Proveedor'
                : 'Agregar Nuevo Proveedor'
              }
            </h2>

            <p className="w3-text-white">
              {editandoId !== null
                ? 'Actualiza los datos del proveedor seleccionado.'
                : 'Registra la información de contacto y estado de un proveedor.'
              }
            </p>
          </header>

          <form onSubmit={handleSubmit} className="w3-container w3-padding-24">

            <div className="w3-row-padding">

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Nombre del proveedor
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Dulce Surtido"
                  required
                />
              </div>

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Teléfono
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="9381112233"
                  required
                />
              </div>

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Correo electrónico
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="ventas@proveedor.com"
                  required
                />
              </div>

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Dirección
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Av. Reforma #120"
                  required
                />
              </div>

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Persona de contacto
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="contacto"
                  value={formData.contacto}
                  onChange={handleChange}
                  placeholder="Laura Méndez"
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
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
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
                    : 'Agregar Proveedor'
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
              Proveedores Registrados
            </h2>

            <p className="w3-text-white">
              Consulta los contactos disponibles y administra sus registros.
            </p>
          </header>

          {cargando ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-sand">
                Cargando proveedores...
              </p>
            </div>
          ) : proveedores.length === 0 ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-white">
                No hay proveedores registrados actualmente.
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
                    <th>Contacto</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {proveedores.map((proveedor) => (
                    <tr key={proveedor.id}>
                      <td>{proveedor.nombre}</td>
                      <td>{proveedor.telefono}</td>
                      <td>{proveedor.correo}</td>
                      <td>{proveedor.direccion}</td>
                      <td>{proveedor.contacto}</td>

                      <td>
                        {proveedor.estado === 'Activo' ? (
                          <span className="w3-tag w3-sand">
                            Activo
                          </span>
                        ) : (
                          <span className="w3-tag w3-black w3-border w3-border-sand w3-text-sand">
                            Inactivo
                          </span>
                        )}
                      </td>

                      <td>
                        <button
                          className="w3-button w3-small w3-sand w3-margin-right"
                          type="button"
                          onClick={() => editarProveedor(proveedor)}
                          disabled={procesando}
                        >
                          Editar
                        </button>

                        <button
                          className="w3-button w3-small w3-black w3-border w3-border-sand w3-text-sand"
                          type="button"
                          onClick={() => eliminarProveedor(proveedor)}
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