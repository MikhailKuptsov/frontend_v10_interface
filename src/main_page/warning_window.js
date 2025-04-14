import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
export default function Warning_window(){
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Button variant="outline-dark" onClick={handleShow}>
                        Организовать аудит
                    </Button>

        {/* предупреждающее окно */}
        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Подтверждение</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Организовать аудит?</Modal.Body>
                            <Modal.Footer>
                              <Button variant='success' onClick={handleClose}>
                                Да, организовать
                              </Button>
                            </Modal.Footer>
                          </Modal>
        </>
    )
}