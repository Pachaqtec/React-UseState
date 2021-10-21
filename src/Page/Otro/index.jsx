/*

Crear componente que va a mostrar 3 botones con los nombres rojo, azul, amarillo.
Si yo hago click en el rojo me va a mostrar el cuadro rojo
Si yo hago click en el azul me va a mostrar el cuadro azul
Si yo hago click en el amarillo me va a mostrar el cuadro amarillo

*/
import React, { useState } from 'react';

export const Botones = () => {

    const [rojo, setRojo] = useState(false);
    const [azul, setAzul] = useState(false);
    const [amarillo, setAmarillo] = useState(false);
    return (
        <div>
            <button onClick={() => setRojo(!rojo)}>{`${rojo ? "Ocultar Rojo" : "Mostrar Rojo"}`}</button>
            <button onClick={() => setAzul(!azul)}>{azul ? 'Ocultar Azul' : 'Mostrar Azul'}</button>
            <button onClick={() => setAmarillo(!amarillo)}>{amarillo ? 'Ocultar Amarillo' : 'Mostrar Amarillo'}</button>

            <div className="flex">
                <div className={`${rojo ? "colorRojo" : "ocultar"}`}></div>
                <div className={`${azul ? "colorAzul" : "ocultar"}`}></div>
                <div className={`${amarillo ? "colorAmarillo" : "ocultar"}`}></div>
            </div>
        </div>
    )
}