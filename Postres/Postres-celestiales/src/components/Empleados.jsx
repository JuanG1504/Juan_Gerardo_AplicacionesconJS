import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/empleados'

const formInicial = {
  nombre: '',
  puesto: '',
  telefono: '',
  sexo: '',
  turno: ''
}

export const Empleados = () => {
  const [empleados, setEmpleados] = useState([])
  const [formData, setFormData] = useState(formInicial)
  const [editandoId, setEditandoId] = useState(null)

  const [cargando, setCargando] = useState(true)
  const [procesando, setProcesando] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  const getEmpleados = async () => {
    setCargando(true)

    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('No se pudieron obtener los empleados')
      }

      const data = await response.json()
      setEmpleados(data)

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
    getEmpleados()
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

    const empleadoDatos = {
      nombre: formData.nombre,
      puesto: formData.puesto,
      telefono: formData.telefono,
      sexo: formData.sexo,
      turno: formData.turno
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
        body: JSON.stringify(empleadoDatos)
      })

      if (!response.ok) {
        throw new Error(
          estaEditando
            ? 'No se pudo modificar el empleado'
            : 'No se pudo agregar el empleado'
        )
      }

      setMensaje({
        texto: estaEditando
          ? 'Empleado modificado correctamente.'
          : 'Empleado agregado correctamente.',
        tipo: 'exito'
      })

      limpiarFormulario()
      await getEmpleados()

    } catch (error) {
      setMensaje({
        texto: `Error: ${error.message}`,
        tipo: 'error'
      })
    } finally {
      setProcesando(false)
    }
  }

  const editarEmpleado = (empleado) => {
    setEditandoId(empleado.id)

    setFormData({
      nombre: empleado.nombre,
      puesto: empleado.puesto,
      telefono: empleado.telefono,
      sexo: empleado.sexo,
      turno: empleado.turno
    })

    setMensaje({
      texto: `Modificando: ${empleado.nombre}`,
      tipo: 'informacion'
    })

    window.scrollTo(0, 0)
  }

  const cancelarEdicion = () => {
    limpiarFormulario()
    setMensaje(null)
  }

  const eliminarEmpleado = async (empleado) => {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar al empleado "${empleado.nombre}"?`
    )

    if (!confirmar) {
      return
    }

    setProcesando(true)
    setMensaje(null)

    try {
      const response = await fetch(`${API_URL}/${empleado.id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar el empleado')
      }

      if (editandoId === empleado.id) {
        limpiarFormulario()
      }

      setMensaje({
        texto: 'Empleado eliminado correctamente.',
        tipo: 'exito'
      })

      await getEmpleados()

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
          ✦ GESTIÓN DEL PERSONAL ✦
        </p>

        <h1 className="w3-serif w3-text-sand w3-xxxlarge">
          Empleados
        </h1>

        <p className="w3-large w3-text-white">
          Administra al personal, sus puestos y turnos dentro de
          Postres Celestiales.
        </p>

       
      </header>

    
      <section className="w3-container w3-padding-16">
        <div className="w3-card-4 w3-black w3-border w3-border-sand">

          <header className="w3-container w3-padding-16 w3-border-bottom w3-border-sand">
            <h2 className="w3-serif w3-text-sand">
              {editandoId !== null
                ? 'Modificar Empleado'
                : 'Agregar Nuevo Empleado'
              }
            </h2>

            <p className="w3-text-white">
              {editandoId !== null
                ? 'Actualiza la información del integrante seleccionado.'
                : 'Registra la información de un nuevo integrante del personal.'
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
                  placeholder="Ana Torres"
                  required
                />
              </div>

              <div className="w3-col l3 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Puesto
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="text"
                  name="puesto"
                  value={formData.puesto}
                  onChange={handleChange}
                  placeholder="Repostera"
                  required
                />
              </div>

              <div className="w3-col l2 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Teléfono
                </label>

                <input
                  className="w3-input w3-black w3-text-white w3-border w3-border-sand"
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="9382223344"
                  required
                />
              </div>

              <div className="w3-col l2 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Sexo
                </label>

                <select
                  className="w3-select w3-black w3-text-white w3-border w3-border-sand"
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                </select>
              </div>

              <div className="w3-col l2 m6 s12 w3-margin-bottom">
                <label className="w3-text-sand">
                  Turno
                </label>

                <select
                  className="w3-select w3-black w3-text-white w3-border w3-border-sand"
                  name="turno"
                  value={formData.turno}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  <option value="Matutino">Matutino</option>
                  <option value="Vespertino">Vespertino</option>
                  <option value="Nocturno">Nocturno</option>
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
                    : 'Agregar Empleado'
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
              Personal Registrado
            </h2>

            <p className="w3-text-white">
              Consulta la información laboral y administra cada registro.
            </p>
          </header>

          {cargando ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-sand">
                Cargando empleados...
              </p>
            </div>
          ) : empleados.length === 0 ? (
            <div className="w3-container w3-padding-32 w3-center">
              <p className="w3-text-white">
                No hay empleados registrados actualmente.
              </p>
            </div>
          ) : (
            <div className="w3-responsive">
              <table className="w3-table w3-bordered w3-black w3-text-white">

                <thead>
                  <tr className="w3-black w3-text-sand">
                    <th>Nombre</th>
                    <th>Puesto</th>
                    <th>Teléfono</th>
                    <th>Sexo</th>
                    <th>Turno</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {empleados.map((empleado) => (
                    <tr key={empleado.id}>
                      <td>{empleado.nombre}</td>
                      <td>{empleado.puesto}</td>
                      <td>{empleado.telefono}</td>
                      <td>{empleado.sexo}</td>

                      <td>
                        <span className="w3-tag w3-black w3-border w3-border-sand w3-text-sand">
                          {empleado.turno}
                        </span>
                      </td>

                      <td>
                        <button
                          className="w3-button w3-small w3-sand w3-margin-right"
                          type="button"
                          onClick={() => editarEmpleado(empleado)}
                          disabled={procesando}
                        >
                          Editar
                        </button>

                        <button
                          className="w3-button w3-small w3-black w3-border w3-border-sand w3-text-sand"
                          type="button"
                          onClick={() => eliminarEmpleado(empleado)}
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