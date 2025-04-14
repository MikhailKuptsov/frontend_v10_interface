import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Warning_detele_task() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button style={{marginRight:"5px", marginTop:"5px"}} className="cards_body_tests_buttons" variant="outline-danger" onClick={handleShow}>Удалить пункт</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ВНИМАНИЕ!!</Modal.Title>
        </Modal.Header>
        <Modal.Body> Вы точно уверены что хотите удалить пункт?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" className="auth_button" onClick={handleClose}>
            Да, хочу удалить
          </Button>
          <Button variant="secondary" className="auth_button" onClick={handleClose}>
            Нет, закрыть предупреждение
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

