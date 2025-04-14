import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import "./form_css.css"
import { Button } from 'react-bootstrap';


const COMPANIES = ["Менеджмент","Подготовка производства"];

const GROUPS = {
  "Менеджмент":['все',
    'M1 Достижение ключевых показателей эффективности завода',
    "М2 Эталонный поток изготовления продукции",
    'М4.1 Оценка компетенций персонала'],
"Подготовка производства":['все',
    "SFe1 Взаимодействие конструкторов (разработчик продукции) и подготовки производства ",
    "SFe2 Управление изменениями (КИ и изменения трудоемкости/процессов)",
    'М4.1 Техническая документация'] 
};


export default function Form_page_with_data_v2(){
    //хук для первой таблицы
    const [firstData, setFirstData]=useState(
        {
            fabric_name:"ничего",
            date_start:"",
            date_end:"",
            leader_of_audit:"",
            self_control_person:"",
            date_end_self_control:""
        }
    )

    //Сохранение данных в ХУК первой таблицы
    const handleChangeFirstTable = (e) => {
        const { name_1, value_1 } = e.target;
        setFirstData((prevData) => ({
          ...prevData,
          [name_1]: value_1,
        }));
      };


    //хук в котором сохраняются элементы таблицы
    const [employees, setEmployees] = useState(
            Object.fromEntries(COMPANIES.map(company => [
            company,
            Object.fromEntries(GROUPS[company].map(group => [
                group,
                {
                company: company,
                group: group,
                lastName: '',
                firstName: ''
                }
            ]))
            ]))
        );
    
        const [showAllGroups, setShowAllGroups] = useState(
            Object.fromEntries(COMPANIES.map(company => [company, false]))
          );
    
    
          const handleChange = (company, group, event) => {
            const { name, value } = event.target;
            const updatedEmployees = {
              ...employees,
              [company]: {
                ...employees[company],
                [group]: {
                  ...employees[company][group],
                  [name]: value
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
                        lastName: '',
                        firstName: '',
                    }
                    }
                };
                setEmployees(updatedEmployees);
                }
            };

        //Отправка данных целиком
        const handleSubmit = (event) => {
            event.preventDefault();
            const final_data={
                firstData,
                employees
            }
            console.log('Информация о сотрудниках:', final_data);
            // Отправка данных на сервер
        };


    
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div>
            <div className="table_first">
                <div className="table_first_info_1">
                    <label>Выберите завод:</label>
                    <input type='text' 
                    id='fabric_name'
                    name_1='fabric_name'
                    value_1={firstData.fabric_name}
                    onChange={handleChangeFirstTable}
                    />
                </div>
                <div className="table_first_info_2">
                    <label>Дата начала:</label>
                    <input 
                    type='date'
                    id='date_start'
                    name_1='date_start'
                    value_1={firstData.date_start}
                    onChange={handleChangeFirstTable}
                    />
                </div>
                <div className="table_first_info_3">
                    <label>Дата конца:</label>
                    <input 
                    type='date'
                    id='date_end'
                    name_1='date_end'
                    value_1={firstData.date_end}
                    onChange={handleChangeFirstTable}/>
                </div>
                <div className="table_first_info_4">
                    <label>Лидер аудита:</label>
                    <input 
                    type='text'
                    id='leader_of_audit'
                    name_1='leader_of_audit'
                    value_1={firstData.leader_of_audit}
                    onChange={handleChangeFirstTable}/>
                </div>
                <div className="table_first_info_5">
                    <label>Сотрудник ОРПС:</label>
                    <input 
                    type='text'
                    id='self_control_person'
                    name_1='self_control_person'
                    value_1={firstData.self_control_person}
                    onChange={handleChangeFirstTable}
                    />
                </div>
                <div className="table_first_info_5">
                    <label>срок самоконтроля:</label>
                    <input 
                    type='date'
                    id='date_end_self_control'
                    name_1='date_end_self_control'
                    value_1={firstData.date_end_self_control}
                    onChange={handleChangeFirstTable}/>
                </div>
            </div>
            {/* заголовки таблицы */}
            <div className="table_lable">
                <div className="table_lable_cell_1">
                    <p>Раздел</p>
                </div>
                <div className="table_lable_row_cells">
                    <div className="table_lable_cell_2">
                        <p>подаздел</p>
                    </div>
                    <div className="table_lable_cell_3">
                        <p>ФИО сотрудника</p>
                    </div>
                    <div className="table_lable_cell_4">
                        <p>Доступ к результату</p>
                    </div>
                </div>
            </div>
            {/* содержимое таблицы */}
            {COMPANIES.map((company) => (
                <div className="table_line">
                    <div className="column_test" key={company}>
                        <p>{company}</p>
                    </div>
                    <div className="column_with_data">
                        <div className="column_with_settings">
                            <select
                                value={showAllGroups[company] ? "По каждой группе" : "Всё"}
                                onChange={(e) => handleToggleGroups(company)}
                            >
                                <option value="Всё">Всё</option>
                                <option value="По каждой группе">По каждой группе</option>
                            </select>
                        </div>


                        <div className="column_with_subtest_info">
                            {/* здесь будут чередоваться строки по фильтру */}
                            {GROUPS[company].map((group) => {
                                if (!showAllGroups[company] && group !== 'все') {
                                    return null; // Скрываем все группы, кроме "все"
                                }

                                if (showAllGroups[company] && group === 'все') {
                                    return null; // Скрываем группу "все"
                                }

                                return (
                                    <div className="row_with_subtest_info" key={group}>

                                        <div className="row_cell_1" >
                                            <p>{group}</p>
                                        </div>

                                        <div className="row_cell_2">
                                            <label>
                                                <input
                                                    style={{width:"100%"}}
                                                    type="text"
                                                    name="lastName"
                                                    value={employees[company][group].lastName}
                                                    onChange={(event) => handleChange(company, group, event)}
                                                    required
                                                />
                                            </label>
                                        </div>

                                        <div className="row_cell_3">
                                        <label>
                                            <input style={{width:"100%"}}
                                                type="text"
                                                name="firstName"
                                                value={employees[company][group].firstName}
                                                onChange={(event) => handleChange(company, group, event)}
                                                required
                                            />
                                        </label>
                                        </div>
                                    </div>
                                )})}
                        </div>
                    </div>
                </div>
                ))}
        </div>
        <Button type="submit" variant='outline-dark' style={{margin:"5px"}}>Сохранить все данные</Button>
        </form>
        </>
    )
}