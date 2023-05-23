import React from "react";
import { Form, Button ,Container  } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
        <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-center">Tarea</Form.Label>
          <Form.Control type="text" placeholder="Ingrese una Tarea" required maxLength={400} minLength={1} />
        </Form.Group>
      </Form>
      </Container>
    </div>
  );
};

export default Formulario;
