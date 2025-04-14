import React, { useState } from 'react';

const COMPANIES = ['Компания A', 'Компания B', 'Компания В'];

const GROUPS = {
    'Компания A': ['все', 'б', 'д', 'е'],
    'Компания B': ['все', 'ж', 'к'],
    'Компания В': ['все', 'к', 'х', 'ё', 'ч'],
};

function EmployeeForm() {
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
                    middleName: ''
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
                        middleName: ''
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

    return (
        <form onSubmit={handleSubmit}>
            {COMPANIES.map((company) => (
                <div key={company}>
                    <h2>Информация о сотрудниках {company}</h2>

                    <label>
                        Режим ввода:
                        <select
                            value={showAllGroups[company] ? "По каждой группе" : "Всё"}
                            onChange={(e) => handleToggleGroups(company)}
                        >
                            <option value="Всё">Всё</option>
                            <option value="По каждой группе">По каждой группе</option>
                        </select>
                    </label>
                    <br />

                    {GROUPS[company].map((group) => {
                        if (!showAllGroups[company] && group !== 'все') {
                            return null; // Скрываем все группы, кроме "все"
                        }

                        if (showAllGroups[company] && group === 'все') {
                            return null; // Скрываем группу "все"
                        }

                        return (
                            <div key={group} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                                <h3>Группа: {group}</h3>

                                <label>
                                    Фамилия:
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={employees[company][group].lastName}
                                        onChange={(event) => handleChange(company, group, event)}
                                        required
                                    />
                                </label>
                                <br />

                                <label>
                                    Имя:
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={employees[company][group].firstName}
                                        onChange={(event) => handleChange(company, group, event)}
                                        required
                                    />
                                </label>
                                <br />

                                <label>
                                    Отчество:
                                    <input
                                        type="text"
                                        name="middleName"
                                        value={employees[company][group].middleName}
                                        onChange={(event) => handleChange(company, group, event)}
                                    />
                                </label>
                                <br />
                            </div>
                        );
                    })}
                </div>
            ))}

            <button type="submit">Сохранить все данные</button>
        </form>
    );
}

export default EmployeeForm;