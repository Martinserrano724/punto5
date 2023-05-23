import React from "react";
import "../style.css";
import { Form, Button, Container, Row , Col } from "react-bootstrap";
import ListasTareas from "./ListasTareas";
import { useState,useEffect } from "react";


const Formulario = () => {
  let tareasLS = JSON.parse(localStorage.getItem('listaTareas')) || [];

  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState(tareasLS);
  

  useEffect(()=>{
    localStorage.setItem('listaTareas',JSON.stringify(arrayTareas));
  },[arrayTareas])

  const handleSubmit = (e) => {
    if(tarea !=''){
      e.preventDefault();
        setArrayTareas([...arrayTareas, tarea]);
        //limpia input
        setTarea("");
    }
    
  
  };
 
  const eliminarTarea = (nombreFiltrado) => {
    let tareasFiltradas = arrayTareas.filter(
      (itemTarea) => itemTarea != nombreFiltrado
    );
    setArrayTareas(tareasFiltradas); 
  };
  
  return (
   
      <Container  className="">
        <Row className="   justify-content-center mt-5 ">
        <Col xs="11" sm="11" md="12" lg="10" className="bg-white m-0">
          <h3 className="text-center bg-white ">Bienvenidos</h3>
          <hr />
          <Form className="bg-white " onSubmit={handleSubmit}>
            <Form.Group className="mb-3 bg-white" >
              <Form.Label className=" bg-white text-center">Ingresa Tus Tareas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese una Tarea"
                required
                maxLength={100}
                minLength={1}
                className="bg-white"
                onChange={(e) => setTarea(e.target.value)}
                value={tarea}
              />
            </Form.Group>
            <Button
              className="primary"
              type="submit"
              
            >
              Enviar
            </Button>
          </Form>
           <ListasTareas tareas={arrayTareas} eliminar={eliminarTarea}></ListasTareas>
       
          </Col>
        </Row>
      </Container>
    
  );
};

export default Formulario;
