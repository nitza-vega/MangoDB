import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contactanos from './pages/Contactanos'
import NavBar from './layouts/NavBar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/Nosotros' element={<Nosotros/>} />
          <Route path='/Contáctanos' element={<Contactanos/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
