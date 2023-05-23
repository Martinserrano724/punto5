import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import TareaItem from './tareaItem';
const ListasTareas = () => {
    return (
        <div>
            <ListGroup className="mt-5"><TareaItem></TareaItem></ListGroup>
        </div>
    );
};

export default ListasTareas;