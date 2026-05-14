import { useEffect, useState } from 'react'

const Tabla = ({ url, title }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const getData = async () => {
    try {
      const resp = await fetch(url)
      const json = await resp.json()
      setData(json)
    } catch (err) {
      setError('Error loading data')
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [url])

  // Get column names automatically
  const columns = data.length > 0 ? Object.keys(data[0]) : []

  return (
    <div style={{ marginBottom: '40px' }}>
      <h2>{title}</h2>

      {error ? (
        <p>{error}</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr style={{ backgroundColor: 'blue', color: 'white' }}>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => (
                  <td key={col}>
                    {typeof row[col] === 'object'
                      ? JSON.stringify(row[col])
                      : row[col].toString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Tabla