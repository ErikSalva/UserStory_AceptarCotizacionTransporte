import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detalle.css'; // Importa el archivo de estilos

const Detalle = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pedido, nombre, fechaRetiro, fechaEntrega, total, tarjeta } = location.state || {};

  const handleCancel = () => {
    navigate('/');
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/confirmacion', {
        state: {
          nroPedido: pedido,
          nombreChofer: nombre,
          fechaRetiro,
          fechaEntrega,
          precio: total,
          tarjeta,
        }
      });
    }, 750); // Delay de 0,75 segundo para simular el proceso de carga
  };

  return (
    <div className="bg-[#0077B6] p-6 rounded-xl shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4 text-white">Pedido {pedido} - Detalle</h2>
      <div className="space-y-4">
        {/* Detalle de envío */}
        <div>
          <h3 className="text-md font-semibold text-white">Detalle del envío</h3>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Ubicación retiro:</span> calle falsa 1234, CP:5010, Córdoba, Argentina
          </p>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Ubicación entrega:</span> calle falsa 5678, CP:5000, Córdoba, Argentina
          </p>
        </div>

        {/* Fechas de retiro y entrega */}
        <div>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Retiro:</span> {fechaRetiro} - 16:00 hs
          </p>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Entrega:</span> {fechaEntrega} - 16:30 hs
          </p>
        </div>

        {/* Chofer */}
        <div>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Chofer:</span> {nombre}
          </p>
        </div>

        {/* Estado y detalles del pago */}
        <div>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Estado:</span> PENDIENTE
          </p>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Detalle del pago:</span> #2937748E
          </p>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Total:</span> ${total}
          </p>
          {tarjeta ? <p className="text-sm text-gray-200">
            <span className="font-semibold">Tarjeta terminada en:</span> {tarjeta.slice(-4)}
          </p> : <p className="text-sm text-gray-200">
            <span className="font-semibold">Efectivo</span>
          </p>}
        </div>

        {/* Botones de Confirmar y Cancelar */}
        <div className="flex justify-around mt-4">
          <button
            onClick={handleCancel}
            className="bg-[#FF6F61] text-white px-4 py-2 rounded-lg hover:bg-[#FF4F3F] transition-colors duration-300"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            className="bg-[#03045E] text-white px-4 py-2 rounded-lg hover:bg-[#0056b3] transition-colors duration-300"
          >
            Confirmar
          </button>
        </div>
      </div>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Detalle;
