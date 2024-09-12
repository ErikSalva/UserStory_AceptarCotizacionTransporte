import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css'; // Asegúrate de importar el archivo CSS

const Confirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { nombreChofer, fechaEntrega, precio, tarjeta } = location.state || {};

    useEffect(() => {
        const audio = new Audio('/sounds/bell-ding.wav');
        audio.volume = 0.2;
        audio.play();
    }, []);

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-xs">
                <div className="flex flex-col items-center mb-4">
                    <div className="bg-green-600 w-16 h-16 rounded-full flex justify-center items-center mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white checkmark" // Añadir clase para la animación
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">CONFIRMADO</h2>
                </div>
                <div className="text-sm text-gray-700 mb-4">
                    <p><strong>Ubicación entrega:</strong> calle falsa 5678, CP:5000, Córdoba, Argentina</p>
                    <p><strong>Entrega:</strong> {fechaEntrega} - 16:30 hs</p>
                    <p><strong>Chofer:</strong> {nombreChofer}</p>
                    <p><strong>Estado:</strong> CONFIRMADO</p>
                </div>
                <div className="text-sm text-gray-700 mb-4">
                    <p><strong>Detalle del pago</strong></p>
                    <p>Total: <strong>${precio}</strong></p>
                    {tarjeta ? <p>
                        <span className="flex items-center">
                            <img
                                src="/img/tarjeta-de-credito.png"
                                alt="tarjeta"
                                className="h-5 w-5 mr-2" // Ajusta el tamaño del ícono con Tailwind
                            />
                            Tarjeta
                        </span>
                    </p> : <p>
                        <span className="flex items-center">
                            <img
                                src="/img/dinero.png"
                                alt="Dinero"
                                className="h-5 w-5 mr-2" // Ajusta el tamaño del ícono con Tailwind
                            />
                            Efectivo
                        </span>
                    </p>}
                </div>
                <button
                    onClick={handleNavigate}
                    className="w-full py-2 bg-blue-700 text-white rounded-md mt-4 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    INICIO
                </button>
            </div>
        </div>
    );
}

export default Confirmation;
