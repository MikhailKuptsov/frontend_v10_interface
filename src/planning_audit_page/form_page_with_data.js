import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import "./form_css.css"
import { Button } from 'react-bootstrap';


const COMPANIES = ['Менеджмент', 'Подготовка производства', 'SF-m операции'];

const GROUPS = {
    'Менеджмент': ['все', 'м1', 'м2', 'м4'],
    'Подготовка производства': ['все', '1', '2'],
    'SF-m операции': ['все', 'к', 'х', 'ё', 'ч'],
};


export default function Form_page_with_data(){
    const [employees, setEmployees] = useState(
            Object.fromEntries(COMPANIES.map(company => [
                company,
                Object.fromEntries(GROUPS[company].map(group => [
                    group,
                    {
                        company: company,
                        group: group,
                        lastName: '',
                        firstName: '',
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
    
            if (!showAllGroups[company]) { // Если переключаемся на "Все группы", то обнуляем данные группы "все"
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
    
    
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Информация о сотрудниках:', employees);
            // Отправка данных на сервер
        };

    
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div>
            <div className="table_first">
                <div className="table_first_info_1">
                    <label>Выберите завод:</label>
                    <input type='text'/>
                </div>
                <div className="table_first_info_2">
                    <label>Дата начала:</label>
                    <input type='date'/>
                </div>
                <div className="table_first_info_3">
                    <label>Дата конца:</label>
                    <input type='date'/>
                </div>
                <div className="table_first_info_4">
                    <label>Лидер аудита:</label>
                    <input type='text'/>
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