import React from "react";
import '../style.css'
import { Form, Button, Container } from "react-bootstrap";
import ListasTareas from "./ListasTareas";

const Formulario = () => {
  return (
    <div>
      <Container className="container">
        <h3 className="text-center">Bienvenidos</h3>
        <hr />
        <Form className="bg-white ">
          <Form.Group className="mb-3 bg-white" controlId="formBasicEmail">
            <Form.Label className=" bg-white">Ingresa Tus Tareas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una Tarea"
              required
              maxLength={400}
              minLength={1}
              className="bg-white"
            />
          </Form.Group>
          <Button className="primary" type="submit">
        Enviar
      </Button>
        </Form>
        <ListasTareas></ListasTareas>
      </Container>
    </div>
  );
};

export default Formulario;
