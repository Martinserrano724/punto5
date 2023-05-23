import React from 'react';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';



const TareaItem = ({tarea,eliminar}) => {
    return (
        <div>
            <div >
            <ListGroup.Item className='d-flex justify-content-between' onClick={()=>eliminar(tarea)}>{tarea} <button className='btn btn-danger'>X</button></ListGroup.Item>
        </div>
        </div>
    );
};

export default TareaItem;