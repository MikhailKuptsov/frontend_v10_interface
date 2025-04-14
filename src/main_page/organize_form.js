import { useState } from "react";
import { Form, Table, Button, Stack, Modal } from "react-bootstrap"

import fabrics_tests from '../Text_data/fabrics_list_data';
import tests_audit_names from "../Text_data/tests_audit_names";

import Warning_window from "./warning_window";

export default function Organize_form(){


    const list_of_checks_fabrics = fabrics_tests.map( fabrics_tests =>
        <option value="1">{fabrics_tests.title}</option>
            );
    const list_of_checks_tests_audit=tests_audit_names.map( a => <option>{a.title}</option> )

    //данные из формы по умолчанию пустые
    const [inputDate, setInputDate]=useState("");
    //Поля формы
    const [inputFields, setInputFields] = useState([
        { FIO_worker: '', section: '', subsection:' ', permission_results: true }
      ]);

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
     }

    //добавить новую форму
    const addFields = () => {
        let newfield = { FIO_worker: '', section: '', subsection:' ', permission_results: true }
    
        setInputFields([...inputFields, newfield])
    };
    //подтвердить
    const submit = (e) => {
        e.preventDefault();
        //пока выводит в консоль здесь
        console.log(inputFields)
    }
    //удалить строку из формы
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    return(
        <>
        <div style={{textAlign:"left"}}>
                  <Form>
                    <Form.Label>Выберите завод:</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>...</option>
                      
                      {list_of_checks_fabrics}
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Дата начала аудита:</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Дата завершения:</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    {/* Динамическая форма */}

                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>ФИО сотрудника</th>
                          <th>Раздел</th>
                          <th>Подраздел</th>
                          <th>Доступ к результатам</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                            <tr>
                            <td>1</td>
                            <td>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" />
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Select aria-label="Default select example">
                                <option>...</option>
                                {list_of_checks_tests_audit}
                            </Form.Select>
                            </td>
                            <td>
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" />
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Check type="checkbox" label="" />
                            </td>
                            </tr>                            
                        
                      </tbody>
                    </Table>


                    <Stack direction="horizontal" gap={3}>
                      <div className="p-2"></div>
                      <div className="p-2 ms-auto">
                      
                      </div>
                      <div className="p-2">
                      <Button variant="outline-success" >
                          Добавить аудитора
                        </Button>
                        </div>
                    </Stack>

                    <Warning_window/>
                    
                    
                    
                </Form>
              </div>
              </>
    )
}