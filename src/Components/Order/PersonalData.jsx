import React from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalData = ({ data, setData, setIsDisabled, handleCancel, dataPedido }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleBack = () => {
    setIsDisabled(false);
  }

  const handleConfirm = () => {
    navigate("/detalle", { state: { pedido: dataPedido.nroPedido, nombre: dataPedido.nombre, fechaRetiro: dataPedido.fechaRetiro, fechaEntrega: dataPedido.fechaEntrega, total: dataPedido.precio, tarjeta: data.nroTarjeta } });
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-2">
      <h2 className="text-lg font-semibold mb-4">Datos Personales</h2>
      <form className="space-y-4">
        <input
          name="titular"
          value={data.titular}
          onChange={handleChange}
          placeholder="Titular"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <select
          name="tipoDoc"
          value={data.tipoDoc}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="" disabled>Selecciona el tipo de documento</option>
          <option value="DNI">DNI</option>
          <option value="Pasaporte">Pasaporte</option>
          <option value="Cédula">Cédula de identidad</option>
        </select>
        <input
          name="nroDoc"
          value={data.nroDoc}
          onChange={handleChange}
          placeholder="Nro de documento"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          name="nroTarjeta"
          value={data.nroTarjeta}
          onChange={handleChange}
          placeholder="Nro de tarjeta"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          name="vencimiento"
          value={data.vencimiento}
          onChange={handleChange}
          placeholder="Fecha de expiración"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          name="codSeg"
          value={data.codSeg}
          onChange={handleChange}
          placeholder="Código de seguridad"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <div className="flex space-x-2 mt-4 justify-center">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={handleBack}>
            Atrás
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={handleCancel}>
            Cancelar
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleConfirm}>
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalData;