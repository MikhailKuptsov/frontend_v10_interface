import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Create_test_window() {
  const [show, setShow] = useState(false);
  const [testNameData, setTestNameData]=useState({test_name:""})

  const navigate = useNavigate();

  const handleClose = () => {setShow(false)};

  const handleShow = () => setShow(true);


  const handleChange=(event)=>{
        setTestNameData({...testNameData, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(testNameData)
        navigate('/Tests_name_page')
        setShow(false)
    }

  return (
    <>
      <Button className="button_test_style" onClick={handleShow} variant="outline-dark" size="lg" >Создать раздел</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Создать новый раздел</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
            <Modal.Body>
                        <label>Введите название теста:</label><br/>
                        <input
                        type="text"
                        placeholder="введите название теста"
                        name="test_name"
                        value={testNameData.test_name}
                        onChange={handleChange}
                        /><br/>                              
            </Modal.Body>
            <Modal.Footer>
            <Button type="submit">Создать тест</Button>
                <Button variant="secondary"  onClick={handleClose}>Закрыть</Button>
            </Modal.Footer>
        </form> 
      </Modal>
    </>
  );
}

