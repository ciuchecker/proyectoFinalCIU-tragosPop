import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap';

const Consignas = () =>{
    return(
        <Fragment >
            <div className="estiloContenedor">
                <p className="fuenteTituloBody">Examen Final</p>
                <div className="contenedorArticulosConsignas">
                    <article className="formatoArticulo">
                        <ListGroup as="ul">
                            <ListGroup.Item className="bg-warning p-2 text-dark" as="li">Objetivo</ListGroup.Item>
                            <ListGroup.Item as="li">Procesamiento de datos</ListGroup.Item>
                            <ListGroup.Item as="li">Hooks</ListGroup.Item>
                            <ListGroup.Item as="li">Consulta una API</ListGroup.Item>
                            <ListGroup.Item as="li">Creacion de Componentes</ListGroup.Item>
                            <ListGroup.Item as="li">Uso de css: Boostrap, BReact, etc</ListGroup.Item>
                            <ListGroup.Item as="li">Persistencia Local</ListGroup.Item>
                        </ListGroup>
                    </article>
                    <article className="formatoArticulo">
                        <ListGroup as="ul">
                            <ListGroup.Item className="bg-warning p-2 text-dark" as="li" active>Entregable</ListGroup.Item>
                            <ListGroup.Item as="li">Enlace github al repositorio del proyecto</ListGroup.Item>
                            <ListGroup.Item as="li">Enlace al sitio web desplegado en netlify.com</ListGroup.Item>
                        </ListGroup>
                    </article>
                    <article className="formatoArticulo">
                        <ListGroup as="ul">
                            <ListGroup.Item className="bg-warning p-2 text-dark" as="li" active>Condiciones</ListGroup.Item>
                            <ListGroup.Item as="li">La entrega es individual</ListGroup.Item>
                            <ListGroup.Item as="li">Se podra reutilizar codigo de clase</ListGroup.Item>
                            <ListGroup.Item as="li">Todo el codigo debe estar en el repositorio</ListGroup.Item>
                            <ListGroup.Item as="li">Solo habra que hacer: npm i, npm start</ListGroup.Item>
                        </ListGroup>
                    </article>
                </div>
            </div>
            
        </Fragment>
    );
};

export default Consignas;