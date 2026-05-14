# carrusel de imagenes

Para este proyecto necesita ubicar las herramientas:

1. `https://picsum.photos/200/300` es un lorem ipsum para imagenes (picture ipsum), al poner la liga anterior, le devolvera una imagen aleatoria.
2. `https://picsum.photos/id/240/200/300` nos devuelve la imagen con id=240
3. dev toys [consola](https://devtoys.app/) [en linea](https://devtoys.vercel.app/formatters/json) [en linea](https://devtoys.pro/es)

Actividades

1. crear un nuevo proyecto `npm create vite@latest -- --template react`
2. limpielo, deje el componente `App.jsx` con el letrero hola
3. haga lo siguiente:

agregar un componente (el **lorem ipsum** generelo con dev toys):

Componente: Tarjeta.jsx
```jsx
export const Tarjeta = () => {
    const path="https://picsum.photos/200/300"
    const titulo="imagen 1"
    const descripcion=`Lorem ipsum dolor sit amet, laborum pariatur sint consequat dolore officia minim esse. Irure sint incididunt ex est laboris reprehenderit sit incididunt ullamco est dolor`
  return (
    <div className="tarjeta">
        <img src={path} alt={titulo} />
        <p className="descripcion">{descripcion}</p>
    </div>
  )
}
```

Llamela en `App.jsx`
```jsx
import './App.css'
import { Tarjeta } from './Tarjeta'

function App() {
  return (
    <>
        <Tarjeta />
    </>
  )
}

export default App
```

Cambiemos los valores de path, titulo y descripcion para que sean enviados como props desde el componente padre (App.jsx en este caso)

Archivo: Tarjeta.jsx
```jsx
export const Tarjeta = ({path, titulo, descripcion}) => {
  return (
    <div className="tarjeta">
        <img src={path} alt={titulo} />
        <p className="descripcion">{descripcion}</p>
    </div>
  )
}
```

Para usar la tarjeta cambiamos App.jsx
```jsx
import './App.css'
import { Tarjeta } from './Tarjeta'
  const item={
      id:0,
      path:"https://picsum.photos/200/300",
      titulo:"figura 1",
      descripcion:"Illum eos nisl lorem amet facilisi justo dolores labore quod diam amet. Diam gubergren sit vero accusam sadipscing facilisis eos ipsum. Diam accusam aliquyam nam diam diam zzril commodo amet tincidunt eirmod. Sit euismod doming minim. Ipsum dolore aliquyam lorem dolor elit sed ut elitr "
    }
function App() {
  return (
    <>
    <Tarjeta 
        key={item.id}
        path={item.path} 
        alt="" 
        titulo={item.titulo}
        descripcion={item.descripcion}
    />
    </>
  )
}
export default App
```

Mostremos ahora un conjunto de imagenes, para esto modificamos solamente el archivo `App.jsx`

```jsx
import './App.css'
import { Carrusel } from './Carrusel'
import { Tarjeta } from './Tarjeta'

function App() {
  
  const imagenes=[
    {
      id:0,
      path:"https://picsum.photos/200/300",
      titulo:"figura 1",
      descripcion:"Illum eos nisl lorem amet facilisi justo dolores labore quod diam amet. Diam gubergren sit vero accusam sadipscing facilisis eos ipsum. Diam accusam aliquyam nam diam diam zzril commodo amet tincidunt eirmod. Sit euismod doming minim. Ipsum dolore aliquyam lorem dolor elit sed ut elitr "
    },
    {
      id:1,
      path:"https://picsum.photos/id/240/200/300",
      titulo:"figura 2",
      descripcion:"Sit et clita ut. Congue facilisi sit diam lobortis erat invidunt eros et dolor sea ipsum gubergren sea at hendrerit sadipscing. Velit accusam dolor et sed gubergren diam vero. Eos nibh takimata minim elitr kasd diam ut feugiat no takimata diam amet dolore. Amet autem voluptua eu amet sanctus lorem"
    },
    {
      id:2,
      path:"https://picsum.photos/id/239/200/300",
      titulo:"figura 3",
      descripcion:"labore praesent molestie tempor invidunt clita ipsum dolor. Stet eirmod stet consetetur rebum clita lorem erat ipsum. Takimata amet et nonummy dolor vero sea amet dolor est tation diam. Eirmod dolore tation possim gubergren takimata et elitr ipsum takimata vel duo diam lorem dolore invidunt sit aliquyam. "
    }
  ]
  return (
    <>
      {imagenes.map((item) => <Tarjeta 
        key={item.id}
        path={item.path} 
        alt="" 
        titulo={item.titulo}
        descripcion={item.descripcion}
      />)}
    
    </>
  )
}

export default App
```

Creamo ahora un carrusel
Archivo: Carrusel.jsx

```jsx
import { useState } from "react"
import { Tarjeta } from "./Tarjeta"

export const Carrusel = ({lista}) => {
    const [contador, setContador]=useState(0)
    const siguiente=()=>setContador((contador+1) % lista.length)

  return (
    <div className="carrusel">
        <Tarjeta 
        path={lista[contador].path || ""} 
        alt="" 
        titulo={lista[contador].titulo}
        descripcion={lista[contador].descripcion}
      />
      <button onClick={siguiente}>siguiente</button>
    </div>
  )
}
```

Pregunte al profesor sobre useState.

Use este componente en App.jsx así: 
```jsx
//...
return(
    <>
        <Carrusel lista={imagenes} />
    </>
)
```
