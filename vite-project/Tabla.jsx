import { useEffect, useState } from 'react'
import getUsers, { getUser } from './services/apiUser.js'
import './App.css'
import { renderToPipeableStream } from 'react-dom/server'

const Tabla = () => {
  const [data, setDatos] = useState(null
)
    const url='https://jsonplaceholder.typicode.com/todos'
    const url='https://jsonplaceholder.typicode.com/users'
    
    const getData=(url)=>{
        return fetch(url)
        .then(resp=>resp.json())
    }
    getData()
    then(data=>console.log(data))
}
useEffect(()=>{getData(url) .then(data=>console.log(data))},[])

  return (
    <div>
      {JSON.stringify(datos)}
   
      {
        errores? 
        (<p>{errores}</p>)
        :
        (
          <table classname="w3-table w3-striped"  border="1">
          <thead>
            <tr style={{ backgroundColor: 'blue', color: 'white' }}>
              <th>userID</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
         {data?.map(d=>{
         return(<tr>
            <td>{data.userID}</td>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.completed}</td>
            </tr>)
         })}
          </tbody>
        </table>
        )
      }
       </div>
  )


export default Tabla
al menos 5 tablas 
interfa en react de todo
altas, modificiaciones y consultas