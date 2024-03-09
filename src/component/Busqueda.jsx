import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Stack, Form, Button } from 'react-bootstrap';
import Bebida from './Bebida';


  const Busqueda = ({ listaBebidas, carrito, setCarrito }) => {
    const [tragoABuscar, setTragoAbuscar] = useState("");
    const [resultadoBusqueda, setResultadoBusqueda] = useState([]);


    let resultado = []
    const buscarTrago = (tragoABuscar) => {
        if(tragoABuscar === ""){
            
        }else{
            resultado = listaBebidas.filter(bebida =>
                bebida.strDrink.toLowerCase().includes(tragoABuscar.toLowerCase())
            );
        }
    
        setResultadoBusqueda(resultado);
        setTragoAbuscar("")
        setResultadoBusqueda(resultado)
    }
    
    return(
        <Fragment>
            <div className="contenedorBarraBusqueda">
                <div className="contenedorBBIndividual">
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control 
                            value={tragoABuscar} 
                            onChange={(e) => setTragoAbuscar(e.target.value)}
                            className="me-auto" 
                            placeholder="Que trago buscas?" 
                        />
                        
                        <div className="vr" />
                        
                        {
                            resultadoBusqueda.length === 0 ? (
                                <Button 
                                    onClick={() => buscarTrago(tragoABuscar)} 
                                    variant="primary">Buscar</Button>       
                            ) : (
                                <Button 
                                    onClick={() => buscarTrago(tragoABuscar)} 
                                    variant="primary">Reset</Button>
                            ) 
                            
                        }
                        
                    </Stack>
                </div>
            </div>
            <div className="contenedorHome">
                <div className="contenedorCompras">
                    <div className="contenedorGrid">
                        {
                            resultadoBusqueda.map(
                                bebida => (
                                    <Bebida 
                                        key={bebida.idDrink}
                                        bebida = {bebida}
                                        listaBebidas={ listaBebidas }
                                        carrito = { carrito }
                                        setCarrito = { setCarrito }
                                    />
                                )
                            )
                        }
                    <div/>
                </div>
            </div>
            </div>
        </Fragment>
    );
};

export default Busqueda;


