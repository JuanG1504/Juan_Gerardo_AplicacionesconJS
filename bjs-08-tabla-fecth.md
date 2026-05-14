# tabla

Primero hagamos una funcion para leer datos, usaremos los datos falsos de `jsonplaceholder`

Archivo: apiUser.js
```js
function get(path){
    const URL=path
    return fetch(URL)
    .then(resp=>{
        if(!resp.ok) throw new Error("No hay respuesta del servidor")
        return resp.json()
    })
    .then(data=>{
        //console.log("datos")
        return Promise.resolve({
            data,
            error:null
        })
    })
    .catch(error=>{
        console.log("Error")
        return Promise.resolve({
            data:null,
            error:"Error: "+error.message
        })
    })
}

export function getUsers(){
    const path='https://jsonplaceholder.typicode.com/users'
    return get(path)

}

export function getUser(id){
    const path=`https://jsonplaceholder.typicode.com/users/${id}`
    return get(path)

}


export default getUsers
```

Pruebe esta función por ejemplo con la siguiente función:
Archivo: pruebas.js
```js
import getUser from "./src/services/apiUser.js";

getUsers()
.then(resp=>{
    if(resp.data!==null){console.log(JSON.stringify(resp.data))}
    else{console.log(resp.error)}
})
```

## Usando los datos para construir una tabla:

Archivo: App.jsx
```jsx
import { useEffect, useState } from 'react'
import getUsers, { getUser } from './services/apiUser.js'
import './App.css'

function App() {
  const [errores, setErrores] = useState()
  const [users, setUsers] = useState([])
  const [user, setUser] = useState()

  useEffect(()=>{
    getUsers()
    .then(respuesta=>{
      if(respuesta.data!==null){setUsers(respuesta.data)}
      else{
        setErrores(respuesta.error)
      }
    })
    getUser(1)
    .then(resp=>{
      if(resp.data!==null){
        const {name, userName, email}=resp.data
        setUser({name, userName, email})
      }else{
        setErrores(resp.error)
      }
    })
  },[])

  return (
    <>
      {JSON.stringify(user)}
      {
        errores? 
        (<p>{errores}</p>)
        :
        (
          <table border="1">
          <thead>
            <tr style={{ backgroundColor: 'blue', color: 'white' }}>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((usuario,idx) =>{
              // console.log(usuario, usuario.id);  // Verifica si id existe
              return (
                  <tr 
                    key={usuario.id ?? idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#c0c0c0' : 'white',
                      color: 'black'
                    }}
                  >
                    <td>{usuario.id}</td>
                    <td style={{ textAlign: 'left'}}>{usuario.name}</td>
                    
                    <td>{usuario.email}</td>
                  </tr>
                )
              } 
            )}
          </tbody>
        </table>
        )
      }
    </>
  )
}

export default App
```