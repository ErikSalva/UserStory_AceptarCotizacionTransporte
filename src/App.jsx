import './App.css'
import Detalle from './Components/Detalle/Detalle'
import Home from './Components/Home'
import Order from './Components/Order/Order'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/cotizacion' element={<Order />} />
        <Route exact path='/detalle' element={<Detalle />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
