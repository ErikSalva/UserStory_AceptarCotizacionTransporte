import React from 'react';
import Card from './Card/Card';

const Home = () => {
    // Datos de los transportistas
    const transportistas = [
        {
            nroPedido: '1',
            nombreChofer: 'Julian Alvarez',
            fechaRetiro: '25/09/2024',
            fechaEntrega: '30/09/2024',
            precio: 500,
            estrellas: 4
        },
        {
            nroPedido: '2',
            nombreChofer: 'Lionel Messi',
            fechaRetiro: '01/10/2024',
            fechaEntrega: '05/10/2024',
            precio: 750,
            estrellas: 5
        },
        {
            nroPedido: '3',
            nombreChofer: 'Carlos Tevez',
            fechaRetiro: '15/09/2024',
            fechaEntrega: '20/09/2024',
            precio: 400,
            estrellas: 3
        },
        // Agrega más transportistas si es necesario
    ];

    return (
        <div className="min-h-screen bg-[#caf0f8]"> {/* Fondo de la página */}
            {/* Barra superior */}
            <div className="bg-[#03045E] p-4 flex justify-between items-center">
                <span className="text-white text-xl font-bold">Mi Aplicación</span>

                {/* Contenedor del logo con borde circular */}
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                    <img 
                        src="/img/camion.png" 
                        alt="Camión" 
                        className="w-8 h-8 rounded-full" 
                    />
                </div>
            </div>

            {/* Sección de cotizaciones */}
            <div className="p-5 lg:px-20"> {/* Aumentar padding en pantallas grandes */}
                <h2 className="text-2xl font-bold text-center mb-4 text-black">
                    Cotizaciones Disponibles
                </h2>

                {/* Contenedor de tarjetas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {transportistas.map((transportista, index) => (
                        <Card
                            key={index}
                            nroPedido={transportista.nroPedido}
                            nombreChofer={transportista.nombreChofer}
                            fechaRetiro={transportista.fechaRetiro}
                            fechaEntrega={transportista.fechaEntrega}
                            precio={transportista.precio}
                            estrellas={transportista.estrellas}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
