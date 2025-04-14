import { useState } from "react"
import React from "react"
import { Button, Modal } from "react-bootstrap"

export default function Warning_save(){
    const [show, setShow] = useState(false);
        
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return(
        <>
        {/* кнопка сохранения результата уровня */}
            <Button variant="outline-dark" onClick={handleShow} size="lg">
                Сохранить уровень
              </Button>

        {/* Модальное окно с предупреждением */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вы уверены?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Вы уверены, что хотите закрыть уровень?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            да
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}