import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Inicio } from './components/Inicio'
import { Postres } from './components/Postres'
import { Ingredientes } from './components/Ingredientes'
import { Clientes } from './components/Clientes'
import { Proveedores } from './components/Proveedores'
import { Empleados } from './components/Empleados'
import { Pedidos } from './components/Pedidos'
import './App.css'

function App() {
  return (
    <div className="w3-black w3-text-white" style={{ minHeight: '100vh' }}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/ingredientes" element={<Ingredientes />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App