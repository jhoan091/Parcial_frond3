import React from 'react';

function Vehiculo({autos}) {
    return(
        <div>
            <h2>Vehiculo</h2>
            {autos.map((auto, index) => (
            <div key={index} className="catalogo">
                <h3> Marca: {auto.marca} Placa: {auto.placa} Modelo: {auto.modelo}</h3>
            </div>
            ))}
        </div>
    );
}

export default Vehiculo;
