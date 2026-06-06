import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/ingredientes'

const formInicial = {
  nombre: '',
  unidad: '',
  cantidad: '',
  proveedor: ''
}

export const Ingredientes = () => {
  const [ingredientes, setIngredientes] = useState([])
  const [formData, setFormData] = useState(formInicial)
  const [editandoId, setEditandoId] = useState(null)

  const [cargando, setCargando] = useState(true)
  const [procesando, setProcesando] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  const getIngredientes = async () => {
    setCargando(true)

    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('No se pudieron obtener los ingredientes')
      }

      const data = await response.json()
      setIngredientes(data)

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
    getIngredientes()
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

    const ingredienteDatos = {
      nombre: formData.nombre,
      unidad: formData.unidad,
      cantidad: Number(formData.cantidad),
      proveedor: formData.proveedor
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
        body: JSON.stringify(ingredienteDatos)
      })

      if (!response.ok) {
        throw new Error(
          estaEditando
            ? 'No se pudo modificar el ingrediente'
            : 'No se pudo agregar el ingrediente'
        )
      }

      setMensaje({
        texto: estaEditando
          ? 'Ingrediente modificado correctamente.'
          : 'Ingrediente agregado correctamente.',
        tipo: 'exito'
      })

      limpiarFormulario()
      await getIngredientes()

    } catch (error) {
      setMensaje({
        texto: `Error: ${error.message}`,
        tipo: 'error'
      })
    } finally {
      setProcesando(false)
    }
  }

  const editarIngrediente = (ingrediente) => {
    setEditandoId(ingrediente.id)

    setFormData({
      nombre: ingrediente.nombre,
      unidad: ingrediente.unidad,
      cantidad: ingrediente.cantidad,
      proveedor: ingrediente.proveedor
    })

    setMensaje({
      texto: `Modificando: ${ingrediente.nombre}`,
      tipo: 'informacion'
    })

    window.scrollTo(0, 0)
  }

  const cancelarEdicion = () => {
    limpiarFormulario()
    setMensaje(null)
  }

  const eliminarIngrediente = async (ingrediente) => {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar "${ingrediente.nombre}"?`
    )

    if (!confirmar) {
      return
    }

    setProcesando(true)
    setMensaje(null)

    try {
      const response = await fetch(`${API_URL}/${ingrediente.id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar el ingrediente')
      }

      if (editandoId === ingrediente.id) {
        limpiarFormulario()
      }

      setMensaje({
        texto: 'Ingrediente eliminado correctamente.',
        tipo: 'exito'
      })

      await getIngredientes()

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

      {/* ENCABEZADO PRINCIPAL */}
      <header className="w3-container w3-center w3-padding-32">
        <p className="w3-text-sand w3-wide">
          ✦ CONTROL DE INSUMOS ✦
        </p>

        <h1 className="w3-serif w3-text-sand w3-xxxlarge">
          Ingredientes
        </h1>

        <p className="w3-large w3-text-white">
          Gestiona las existencias necesarias para la preparación de
          los postres de Postres Celestiales.
        </p>

        <p className="w3-text-sand w3-xlarge w3-serif">
          ❦ ─────────────── ❦
        </p>
      </header>

      {/* FORMULARIO */}
      <section className="w3-container w3-padding-16">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">

          <header className="w3-container w3-padding-16 w3-border-bottom w3-border-sand">
            <h2 className="w3-serif w3-text-sand">
              {editandoId !== null
                ? 'Modificar Ingrediente'
                : 'Agregar Nuevo Ingrediente'
              }
            </h2>

            <p className="w3-text-white">
              {editandoId !== null
                ? 'Actualiza la información del ingrediente seleccionado.'
                : 'Ingresa un nuevo ingrediente para incorporarlo al inventario.'
              }
            </p>
          </header>

          <form onSubmit={handleSubmit} className="w3-container w3-padding-24">

            <div className="w3-row-padding">

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Nombre del ingrediente
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Harina"
                  required
                />
              </div>

              <div className="w3-col l2 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Unidad
                </label>

                <select
                  className="w3-select w3-black w3-text-white w3-border w3-border-sand"
                  name="unidad"
                  value={formData.unidad}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  <option value="kg">Kilogramos</option>
                  <option value="g">Gramos</option>
                  <option value="L">Litros</option>
                  <option value="ml">Mililitros</option>
                  <option value="pz">Piezas</option>
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
                  min="0"
                  step="0.01"
                  value={formData.cantidad}
                  onChange={handleChange}
                  placeholder="10"
                  required
                />
              </div>

              <div className="w3-col l4 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Proveedor
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="proveedor"
                  value={formData.proveedor}
                  onChange={handleChange}
                  placeholder="Dulce Surtido"
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
                    : 'Agregar Ingrediente'
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

      {/* MENSAJES */}
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

      {/* TABLA */}
      <section className="w3-container w3-padding-16">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">

          <header className="w3-container w3-padding-16 w3-border-bottom w3-border-sand">
            <h2 className="w3-serif w3-text-sand">
              Inventario Registrado
            </h2>

            <p className="w3-text-white">
              Consulta las existencias actuales y administra cada registro.
            </p>
          </header>

          {cargando ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-sand">
                Cargando ingredientes...
              </p>
            </div>
          ) : ingredientes.length === 0 ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-white">
                No hay ingredientes registrados actualmente.
              </p>
            </div>
          ) : (
            <div className="w3-responsive">
              <table className="w3-table w3-bordered w3-black w3-text-white">

                <thead>
                  <tr className="w3-black w3-text-sand">
                    <th>Nombre</th>
                    <th>Unidad</th>
                    <th>Cantidad</th>
                    <th>Proveedor</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {ingredientes.map((ingrediente) => (
                    <tr
                      key={ingrediente.id}
                      className="w3-hover-black"
                    >
                      <td>{ingrediente.nombre}</td>
                      <td>
                        <span className="w3-tag w3-black w3-border w3-border-sand w3-text-sand">
                          {ingrediente.unidad}
                        </span>
                      </td>
                      <td>{ingrediente.cantidad}</td>
                      <td>{ingrediente.proveedor}</td>

                      <td>
                        <button
                          className="w3-button w3-small w3-sand w3-margin-right"
                          type="button"
                          onClick={() => editarIngrediente(ingrediente)}
                          disabled={procesando}
                        >
                          Editar
                        </button>

                        <button
                          className="w3-button w3-small w3-black w3-border w3-border-sand w3-text-sand"
                          type="button"
                          onClick={() => eliminarIngrediente(ingrediente)}
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