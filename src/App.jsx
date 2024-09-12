import './App.css'
import Detalle from './Components/Detalle/Detalle'
import Home from './Components/Home/Home'
import Order from './Components/Order/Order'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/cotizacion' element={<Order />} />
        <Route exact path='/detalle' element={<Detalle />} />
        <Route exact path='/detalle' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
