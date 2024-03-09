import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button} from 'react-bootstrap';

const Bebida = ({bebida, listaBebidas, carrito, setCarrito}) => {

    const { idDrink, strDrink, strDrinkThumb } = bebida;

    const comprarProducto = (idDrink) => {
        if (bebida) {
            const bebidaSeleccionada = listaBebidas.filter( bebida => bebida.idDrink === idDrink)[0];
            setCarrito([...carrito, bebidaSeleccionada])
            
        } else {
            console.log("La bebida es undefined.");
        }
    };

    const eliminarProducto = (idDrink) => {
        const listaSinEliminado = carrito.filter( bebida => bebida.idDrink !== idDrink);
        setCarrito(listaSinEliminado);
    };

    return(
        <Fragment>
            <div className="estiloTarjeta">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bebida.strDrinkThumb} />
                <Card.Body>
                    <Card.Title className="fuenteBody">{bebida.strDrink}</Card.Title>
                    
                    {
                        listaBebidas?
                            <Button 
                                variant="primary"
                                type="button"
                                onClick={ () => comprarProducto(idDrink) }
                            >Comprar</Button>
                        :
                            <Button 
                                variant="primary"
                                type="button"
                                onClick={ () => eliminarProducto(idDrink) }
                            >Eliminar</Button>
                        
                    }
                </Card.Body>
            </Card>
            </div>
           
        </Fragment>
    );
};

export default Bebida;

