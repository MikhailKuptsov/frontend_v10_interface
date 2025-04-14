import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Warning_detele_test() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button className="cards_body_tests_buttons" variant="outline-danger" onClick={handleShow}>Удалить</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ВНИМАНИЕ!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Нажав на кнопку "удалить" вы удаляете не только название, но и ВСЕ подразделы и ВСЕ пункты внутри этого теста. После этого данные никак нельзя будет вернуть. Но оценки от аудиторов останутся. Чтобы изменить название теста вы должны нажать "редактировать название". Вы точно уверены что хотите удалить раздел?</Modal.Body>
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

