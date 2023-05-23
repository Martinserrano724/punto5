import React from "react";
import "../style.css";
import { Form, Button, Container, Row , Col } from "react-bootstrap";
import ListasTareas from "./ListasTareas";
import { useState } from "react";
const listaLocalStorage=localStorage.getItem('tarea')||[];
const Formulario = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  const handleSubmit = () => {
    if(tarea !=''){
        setArrayTareas([...arrayTareas, tarea]);
        listaLocalStorage.push(tarea);
        localStorage.setItem('tarea',listaLocalStorage);
        setTarea("");
    }
    
  
  };
 {
    console.log(JSON.stringify(listaLocalStorage));
  }
 
  const eliminarTarea = (nombreFiltrado) => {
    let tareasFiltradas = arrayTareas.filter(
      (itemTarea) => itemTarea != nombreFiltrado
    );
    setArrayTareas(tareasFiltradas);
  };
  return (
    <div >
      <Container >
        <Row className=" bg-white  justify-content-md-center mt-5 ">
        <Col sm="12" md="6" className="bg-white ">
          <h3 className="text-center bg-white ">Bienvenidos</h3>
          <hr />
          <Form className="bg-white " onSubmit={(e) => e.preventDefault}>
            <Form.Group className="mb-3 bg-white" controlId="formBasicEmail">
              <Form.Label className=" bg-white text-center">Ingresa Tus Tareas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese una Tarea"
                required
                maxLength={400}
                minLength={1}
                className="bg-white"
                onChange={(e) => setTarea(e.target.value)}
                value={tarea}
              />
            </Form.Group>
            <Button
              className="primary"
              type="submit"
              onClick={() => handleSubmit()}
            >
              Enviar
            </Button>
          </Form>
          
          <ListasTareas tareas={arrayTareas} eliminar={eliminarTarea}></ListasTareas>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Formulario;
