import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentMethods = ({ setPaymentMethod, isDisabled, setIsDisabled, handleCancel, dataPedido }) => {
  const [tempPaymentMethod, setTempPaymentMethod] = useState('');
  const [paymentMethodError, setPaymentMethodError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => setTempPaymentMethod(e.target.value);

  const onClickConfirm = () => {
    if (tempPaymentMethod) {
      setPaymentMethod(tempPaymentMethod);
      setIsDisabled(true);
      setPaymentMethodError('');
    } else {
      setPaymentMethodError('Se debe seleccionar una forma de pago.')
    }

    if (tempPaymentMethod == 'Efectivo') {
      navigate("/detalle", { state: { pedido: dataPedido.nroPedido, nombre: dataPedido.nombre, fechaRetiro: dataPedido.fechaRetiro, fechaEntrega: dataPedido.fechaEntrega, total: dataPedido.precio } });
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Métodos de Pago</h2>
      <form className="space-y-4">
        <div className="flex items-center">
          <input
            id="debito-credito"
            type="radio"
            value="Debito/Credito"
            checked={tempPaymentMethod === 'Debito/Credito'}
            onChange={handleChange}
            disabled={isDisabled}
            className="mr-2"
          />
          <label htmlFor="debito-credito" className="text-gray-700">Débito/Crédito</label>
          <img
            src="/img/tarjeta-de-credito.png"
            alt="tarjeta"
            className="h-5 w-5 mr-2 mx-2" // Ajusta el tamaño del ícono con Tailwind
          />
        </div>
        <div className="flex items-center">
          <input
            id="efectivo"
            type="radio"
            value="Efectivo"
            checked={tempPaymentMethod === 'Efectivo'}
            onChange={handleChange}
            disabled={isDisabled}
            className="mr-2"
          />
          <label htmlFor="efectivo" className="text-gray-700">Efectivo</label>
          <img
            src="/img/dinero.png"
            alt="Dinero"
            className="h-5 w-5 mr-2 mx-2" // Ajusta el tamaño del ícono con Tailwind
          />
        </div>
        {paymentMethodError && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-lg">
          {paymentMethodError}
        </p>}
        {!isDisabled && (
          <div className="flex space-x-2 mt-4 pt-5 justify-center">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={handleCancel}>
              Cancelar
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={onClickConfirm}>
              Siguiente
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default PaymentMethods;