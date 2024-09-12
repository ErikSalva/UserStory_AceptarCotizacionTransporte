import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Order from './Components/Order/Order'
import Detalle from './Components/Detalle/Detalle';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/cotizacion' element={<Order />} />
        <Route exact path='/detalle' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
