import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/postres'

const formInicial = {
  nombre: '',
  categoria: '',
  precio: '',
  tamaño: '',
  disponible: 'true'
}

export const Postres = () => {
  const [postres, setPostres] = useState([])
  const [formData, setFormData] = useState(formInicial)
  const [editandoId, setEditandoId] = useState(null)

  const [cargando, setCargando] = useState(true)
  const [procesando, setProcesando] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  const getPostres = async () => {
    setCargando(true)

    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('No se pudieron obtener los postres')
      }

      const data = await response.json()
      setPostres(data)

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
    getPostres()
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

    const postreDatos = {
      nombre: formData.nombre,
      categoria: formData.categoria,
      precio: Number(formData.precio),
      tamaño: formData.tamaño,
      disponible: formData.disponible === 'true'
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
        body: JSON.stringify(postreDatos)
      })

      if (!response.ok) {
        throw new Error(
          estaEditando
            ? 'No se pudo modificar el postre'
            : 'No se pudo agregar el postre'
        )
      }

      setMensaje({
        texto: estaEditando
          ? 'Postre modificado correctamente.'
          : 'Postre agregado correctamente.',
        tipo: 'exito'
      })

      limpiarFormulario()
      await getPostres()

    } catch (error) {
      setMensaje({
        texto: `Error: ${error.message}`,
        tipo: 'error'
      })
    } finally {
      setProcesando(false)
    }
  }

  const editarPostre = (postre) => {
    setEditandoId(postre.id)

    setFormData({
      nombre: postre.nombre,
      categoria: postre.categoria,
      precio: postre.precio,
      tamaño: postre.tamaño,
      disponible: String(postre.disponible)
    })

    setMensaje({
      texto: `Modificando: ${postre.nombre}`,
      tipo: 'informacion'
    })

    window.scrollTo(0, 0)
  }

  const cancelarEdicion = () => {
    limpiarFormulario()
    setMensaje(null)
  }

  const eliminarPostre = async (postre) => {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar "${postre.nombre}"?`
    )

    if (!confirmar) {
      return
    }

    setProcesando(true)
    setMensaje(null)

    try {
      const response = await fetch(`${API_URL}/${postre.id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar el postre')
      }

      if (editandoId === postre.id) {
        limpiarFormulario()
      }

      setMensaje({
        texto: 'Postre eliminado correctamente.',
        tipo: 'exito'
      })

      await getPostres()

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
          ✦ ADMINISTRACIÓN DEL CATÁLOGO ✦
        </p>

        <h1 className="w3-serif w3-text-sand w3-xxxlarge">
          Postres
        </h1>

        <p className="w3-large w3-text-white">
          Registra, actualiza y controla las creaciones disponibles de
          Postres Celestiales.
        </p>

        
      </header>

      
      <section className="w3-container w3-padding-16">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">

          <header className="w3-container w3-padding-16 w3-border-bottom w3-border-sand">
            <h2 className="w3-serif w3-text-sand">
              {editandoId !== null ? 'Modificar Postre' : 'Agregar Nuevo Postre'}
            </h2>

            <p className="w3-text-white">
              {editandoId !== null
                ? 'Actualiza la información del postre seleccionado.'
                : 'Ingresa los datos del nuevo producto para registrarlo en el catálogo.'
              }
            </p>
          </header>

          <form onSubmit={handleSubmit} className="w3-container w3-padding-24">

            <div className="w3-row-padding">

              <div className="w3-col l3 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Nombre del postre
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Pastel de chocolate"
                  required
                />
              </div>

              <div className="w3-col l3 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Categoría
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  placeholder="Pastel, brownie, pay..."
                  required
                />
              </div>

              <div className="w3-col l2 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Precio
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="number"
                  name="precio"
                  min="0"
                  step="0.01"
                  value={formData.precio}
                  onChange={handleChange}
                  placeholder="280"
                  required
                />
              </div>

              <div className="w3-col l2 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Tamaño
                </label>

                <select
                  className="w3-select w3-black w3-text-white w3-border w3-border-sand"
                  name="tamaño"
                  value={formData.tamaño}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  <option value="Individual">Individual</option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                </select>
              </div>

              <div className="w3-col l2 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Disponibilidad
                </label>

                <select
                  className="w3-select w3-black w3-text-white w3-border w3-border-sand"
                  name="disponible"
                  value={formData.disponible}
                  onChange={handleChange}
                >
                  <option value="true">Disponible</option>
                  <option value="false">No disponible</option>
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
                    : 'Agregar Postre'
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
            <p
              className={
                mensaje.tipo === 'error'
                  ? 'w3-text-white'
                  : 'w3-text-sand'
              }
            >
              {mensaje.texto}
            </p>
          </div>
        </section>
      )}

    
      <section className="w3-container w3-padding-16">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">

          <header className="w3-container w3-padding-16 w3-border-bottom w3-border-sand">
            <h2 className="w3-serif w3-text-sand">
              Catálogo Registrado
            </h2>

            <p className="w3-text-white">
              Consulta los productos actuales y administra cada registro.
            </p>
          </header>

          {cargando ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-sand">
                Cargando postres...
              </p>
            </div>
          ) : postres.length === 0 ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-white">
                No hay postres registrados actualmente.
              </p>
            </div>
          ) : (
            <div className="w3-responsive">
              <table className="w3-table w3-bordered w3-black w3-text-white">

                <thead>
                  <tr className="w3-black w3-text-sand">
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Tamaño</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {postres.map((postre) => (
                    <tr
                      key={postre.id}
                      className="w3-hover-black"
                    >
                      <td>{postre.nombre}</td>
                      <td>{postre.categoria}</td>
                      <td>${postre.precio}</td>
                      <td>{postre.tamaño}</td>

                      <td>
                        {postre.disponible ? (
                          <span className="w3-tag w3-sand">
                            Disponible
                          </span>
                        ) : (
                          <span className="w3-tag w3-black w3-border w3-border-sand w3-text-sand">
                            No disponible
                          </span>
                        )}
                      </td>

                      <td>
                        <button
                          className="w3-button w3-small w3-sand w3-margin-right"
                          type="button"
                          onClick={() => editarPostre(postre)}
                          disabled={procesando}
                        >
                          Editar
                        </button>

                        <button
                          className="w3-button w3-small w3-black w3-border w3-border-sand w3-text-sand"
                          type="button"
                          onClick={() => eliminarPostre(postre)}
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