import './App.css'
import Confirmation from './Components/Detalle/Confirmation'
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
        <Route exact path='/confirmacion' element={<Confirmation />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
