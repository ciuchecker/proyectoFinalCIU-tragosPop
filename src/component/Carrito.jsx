import React, { Fragment, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Bebida from "./Bebida";

const Carrito = ({carrito, setCarrito}) => {
   
    return(
        <Fragment>
            <div className="contenedorHome">
                <div className="contenedorCompras">
                    <div className="contenedorTituloCarrito">
                        <p className="fuenteBody">CARRITO</p>
                    </div>
                    
                    <div className="contenedorGrid">
                        {
                            Array.isArray(carrito) ? (
                                carrito.map(
                                    bebida => (
                                        <Bebida 
                                            key = {bebida.idDrink}
                                            bebida = {bebida}
                                            carrito = {carrito}
                                            setCarrito = { setCarrito }
                                        />
                                    )
                                )
                                
                            ) : (
                                console.error("carrito no es un array")
                            )
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Carrito;