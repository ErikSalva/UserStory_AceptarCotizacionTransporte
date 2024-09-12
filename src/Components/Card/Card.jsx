import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Card = ({ nroPedido, nombreChofer, fechaRetiro, fechaEntrega, precio, estrellas }) => {
    const navigate = useNavigate();
    const handleOnClink = () => {
        navigate("/cotizacion", { state: { nroPedido, nombre: nombreChofer, fechaRetiro: fechaRetiro, fechaEntrega: fechaEntrega, precio: precio } })
    }
    // Generar las estrellas dinámicamente
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= estrellas) {
                stars.push(<img key={i} src="/img/star-solid.svg" alt="Estrella llena" className="w-5 h-5 text-yellow-400" />);
            } else {
                stars.push(<img key={i} src="/img/star-solid-white.svg" alt="Estrella vacía" className="w-5 h-5 text-gray-400" />);
            }
        }
        return stars;
    };

    return (
        <div className="max-w-sm bg-[rgb(0,119,182)] border border-gray-200 rounded-xl shadow p-5">
            <a href="#">
                <img className="rounded-t-xl" src="/img/hombre-conduciendo.jpg" alt="" />
            </a>
            <div className="p-5 text-white">
                {/* Sección de calificación */}
                <div className="flex items-center mb-2">
                    {renderStars()}
                </div>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold">{nombreChofer}</h5>
                </a>
                <p className="mb-3 font-normal">
                    Fecha de retiro: {fechaRetiro}<br />
                    Fecha de entrega: {fechaEntrega}
                </p>

                <div className="flex flex-col items-center mb-4">
                    <div className="text-xl font-bold bg-[#03045E] rounded-lg px-4 py-2 mb-2 text-white">
                        ${precio}
                    </div>
                    <div className="flex space-x-4">
                        <img src="/img/dinero.png" alt="Efectivo" className="w-8 h-8" />
                        <img src="/img/tarjeta-de-credito.png" alt="Crédito" className="w-8 h-8" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="w-[80%] inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-center text-white bg-[#03045E] rounded-lg hover:bg-[rgb(0,95,150)] focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={handleOnClink}>
                        CONTRATAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
