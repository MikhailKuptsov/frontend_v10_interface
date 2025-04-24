import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modal_status_audit({info}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button 
      size='lg' style={{width:"100%",margin:"5px"}} variant='outline-dark'
      onClick={handleShow}>
        {info.button_label}
      </Button>

      <Modal size="md"
 show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Состояние разделов аудита</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_status_audit;