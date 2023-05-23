import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TareaItem = () => {
    return (
        <div>
            <div >
            <ListGroup.Item className='d-flex justify-content-between' onClick={()=>eliminar(tarea)}>hola mundo <button className='btn btn-danger'>Borrar</button></ListGroup.Item>
        </div>
        </div>
    );
};

export default TareaItem;