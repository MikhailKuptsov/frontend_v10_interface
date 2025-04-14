import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typeahead } from 'react-bootstrap-typeahead'; // Import Typeahead
import 'react-bootstrap-typeahead/css/Typeahead.css'; // Import Typeahead CSS

const COMPANIES = ['Менеджмент', 'Подготовка производства', 'SF-m Ручные операции','SF-e оборудование','ОТиБ','Качество','Техническое развитие'];
const GROUPS = {
  'Менеджмент': ['все', 'm1 контроль управления', 'к2 устройства', 'л4 bios control system'],
  'Подготовка производства': ['все', 'SDkL1 разовое обслуживание', 'FД1 директория'],
  'SF-m Ручные операции': ['все', 'к', 'х', 'ё', 'ч'],
  'SF-e оборудование': ['все', 'к', 'х', 'ё', 'ч'],
  'ОТиБ': ['все', 'к', 'х', 'ё', 'ч'],
  'Качество': ['все', 'к', 'х', 'ё', 'ч'],
  'Техническое развитие': ['все', 'к', 'х', 'ё', 'ч'],
};
const LAST_NAMES = ['Маркова Т.Н.', 'Аникеев М.С.', 'Ткачёв А.Н.', 'Моргунов С.Н.'];
const FIRST_NAMES = ['андрей', 'алёна', 'максим', 'аня'];
const HYPERMARKET_NAMES = ['ВТРЗ', 'УЛРЗ', 'АТРЗ','ЯЛРЗ','ОЛРЗ','ЧЭРЗ','УУЛВРЗ',"РЭРЗ"];

function EmployeeForm_v3() {
  const [hypermarketData, setHypermarketData] = useState({
    hypermarketName: [], // Array for Typeahead
    startDate: '',
    endDate: '',
    hypermarketEmployee: [], // Array for Typeahead
    galleryEmployee: [], // Array for Typeahead
    selfCheckDate: '',
  });

  const [employees, setEmployees] = useState(
    Object.fromEntries(COMPANIES.map(company => [
      company,
      Object.fromEntries(GROUPS[company].map(group => [
        group,
        {
          company: company,
          group: group,
          lastName: [], // Store selected last name as an array
          firstName: [] // Store selected first name as an array
        }
      ]))
    ]))
  );

  const [showAllGroups, setShowAllGroups] = useState(
    Object.fromEntries(COMPANIES.map(company => [company, false]))
  );

  const handleChangeHypermarket = (name, value) => {
    setHypermarketData({
      ...hypermarketData,
      [name]: value,
    });
  };

  const handleChangeHypermarketTypeahead = (name, selected) => {
    setHypermarketData({
      ...hypermarketData,
      [name]: selected,
    });
  };

  const handleChangeLastName = (company, group, selected) => {
    const updatedEmployees = {
      ...employees,
      [company]: {
        ...employees[company],
        [group]: {
          ...employees[company][group],
          lastName: selected
        }
      }
    };
    setEmployees(updatedEmployees);
  };

  const handleChangeFirstName = (company, group, selected) => {
    const updatedEmployees = {
      ...employees,
      [company]: {
        ...employees[company],
        [group]: {
          ...employees[company][group],
          firstName: selected
        }
      }
    };
    setEmployees(updatedEmployees);
  };

  const handleToggleGroups = (company) => {
    setShowAllGroups({
      ...showAllGroups,
      [company]: !showAllGroups[company]
    });

    if (!showAllGroups[company]) {
      const updatedEmployees = {
        ...employees,
        [company]: {
          ...employees[company],
          ['все']: {
            company: company,
            group: 'все',
            lastName: [],
            firstName: []
          }
        }
      };
      setEmployees(updatedEmployees);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const final_data=JSON.stringify({hypermarketData, employees})
    console.log('итоговые данные:', final_data);
    // console.log('Данные гипермаркета:', hypermarketData);
    // console.log('Информация о сотрудниках:', employees);
    // Отправка данных на сервер
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Table striped bordered hover >
        <thead>
          <tr >
            <th>Завод:</th>
            <th>Дата начала</th>
            <th>Дата конца</th>
            <th>Лидер аудита</th>
            <th>Сотрудник РПС</th>
            <th>Дата внесения самооценки</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Typeahead
                id="hypermarketName"
                options={HYPERMARKET_NAMES}
                placeholder="Выберите завод..."
                onChange={(selected) => handleChangeHypermarketTypeahead('hypermarketName', selected)}
                selected={hypermarketData.hypermarketName}
                allowNew={false}
              />
            </td>
            <td>
              <Form.Control
                type="date"
                name="startDate"
                value={hypermarketData.startDate}
                onChange={(e) => handleChangeHypermarket('startDate', e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="date"
                name="endDate"
                value={hypermarketData.endDate}
                onChange={(e) => handleChangeHypermarket('endDate', e.target.value)}
              />
            </td>
            <td>
              <Typeahead
                id="hypermarketEmployee"
                options={LAST_NAMES}
                placeholder="Выберите сотрудника..."
                onChange={(selected) => handleChangeHypermarketTypeahead('hypermarketEmployee', selected)}
                selected={hypermarketData.hypermarketEmployee}
                allowNew={false}
              />
            </td>
            <td>
              <Typeahead
                id="galleryEmployee"
                options={LAST_NAMES}
                placeholder="Выберите сотрудника..."
                onChange={(selected) => handleChangeHypermarketTypeahead('galleryEmployee', selected)}
                selected={hypermarketData.galleryEmployee}
                allowNew={false}
              />
            </td>
            <td>
              <Form.Control
                type="date"
                name="selfCheckDate"
                value={hypermarketData.selfCheckDate}
                onChange={(e) => handleChangeHypermarket('selfCheckDate', e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Раздел</th>
            <th>Настройки подразделов и сотрудников на них</th>
          </tr>
        </thead>
        <tbody>
          {COMPANIES.map((company) => (
            <tr key={company}>
              <td>
                <p>{company}</p>
              </td>
              <td>
                <Form.Group className="mb-3">
                  <Form.Label>Режим ввода:</Form.Label>
                  <Form.Select
                    value={showAllGroups[company] ? "По каждой группе" : "Всё"}
                    onChange={(e) => handleToggleGroups(company)}
                  >
                    <option value="Всё">Всё</option>
                    <option value="По каждой группе">По каждой группе</option>
                  </Form.Select>
                </Form.Group>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Группа</th>
                      <th>Фамилия</th>
                      {/* <th>Имя</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {GROUPS[company].map((group) => {
                      if (!showAllGroups[company] && group !== 'все') {
                        return null;
                      }

                      if (showAllGroups[company] && group === 'все') {
                        return null;
                      }

                      return (
                        <tr key={group}>
                          <td>{group}</td>
                          <td>
                            <Typeahead
                              id={`last-name-${company}-${group}`}
                              options={LAST_NAMES}
                              placeholder="Выберите сотрудника..."
                              onChange={(selected) => handleChangeLastName(company, group, selected)}
                              selected={employees[company][group].lastName}
                              allowNew={false}
                              required
                            />
                          </td>
                          {/* <td>
                            <Typeahead
                              id={`first-name-${company}-${group}`}
                              options={FIRST_NAMES}
                              placeholder="Выберите имя..."
                              onChange={(selected) => handleChangeFirstName(company, group, selected)}
                              selected={employees[company][group].firstName}
                              allowNew={false}
                              required
                            />
                          </td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" type="submit" size='lg'>
        Организовать аудит
      </Button>
    </Form>
  );
}

export default EmployeeForm_v3;