import { useEffect, useState } from 'react'
import './App.css'


const Tabla = () => {
  const [data, setData] = useState([])
  const [errores, setErrores] = useState(null)

  const url = 'https://jsonplaceholder.typicode.com/todos'

  const getData = async () => {
    try {
      const resp = await fetch(url)
      const json = await resp.json()
      setData(json)
    } catch (error) {
      setErrores('Error loading data')
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Tabla de Usuarios</h1>

      {errores ? (
        <p>{errores}</p>
      ) : (
        <table className="w3-table w3-striped" border="1">
          <thead>
            <tr style={{ backgroundColor: 'blue', color: 'white' }}>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>

          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.userId}</td>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.completed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Tabla