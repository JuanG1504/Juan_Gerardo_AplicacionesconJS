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
        descripcion={item.descripcion }
      />)}
    
    </>
  )
}

export default App