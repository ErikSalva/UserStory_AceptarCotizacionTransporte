import React from 'react';
import { useNavigate } from 'react-router-dom';


const Detalle = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  const handleConfirm = () => {
    alert('Pedido confirmado');
  };
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Pedido #9384 - Detalle</h2>
      <div className="space-y-4">
        {/* Detalle de envío */}
        <div>
          <h3 className="text-md font-semibold">Detalle del envío</h3>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Ubicación retiro:</span> calle falsa 1234, CP:5010, Córdoba, Argentina
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Ubicación entrega:</span> calle falsa 5678, CP:5000, Córdoba, Argentina
          </p>
        </div>

        {/* Fechas de retiro y entrega */}
        <div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Retiro:</span> 17/09/2024 - 16:00 hs
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Entrega:</span> 17/09/2024 - 16:30 hs
          </p>
        </div>

        {/* Chofer */}
        <div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Chofer:</span> JUAN PEREZ
          </p>
        </div>

        {/* Estado y detalles del pago */}
        <div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Estado:</span> PENDIENTE
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Detalle del pago:</span> #2937748E
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Total:</span> $504.50
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Tarjeta terminada en:</span> XXXX
          </p>
        </div>

        {/* Botones de Confirmar y Cancelar */}
        <div className="flex justify-around mt-4">
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Confirmar
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detalle;