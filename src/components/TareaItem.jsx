import React from 'react';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';



const TareaItem = ({tarea,eliminar}) => {
    return (
        <div>
            <div className=' bg-white'>
            <ListGroup.Item className='overflow-scroll d-flex justify-content-between' >{tarea}<button className='ms-1 btn btn-danger 'onClick={()=>eliminar(tarea)}>X</button> </ListGroup.Item>
        </div>
        </div>
    );
};

export default TareaItem;