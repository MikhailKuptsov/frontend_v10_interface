import React, {useState} from "react";
import { useParams } from "react-router"


export default function Create_task_from_zero_form(){
    const test_name_lable="Менеджмент"
    const subtest_name_lable="М1_менеджмент"
    const level_name_lable="уровень 1"

    const [testName, setTestName] = useState(test_name_lable);
    const [subtestName, setSubtestName] = useState(subtest_name_lable);
    const [levelName, setLevelName] = useState(level_name_lable);

    //поля динамической формы
    const [inputFields, setInputFields] = useState([
        {name: '', age: ''}
    ])

    //сохраннение изменений
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    
    //добавление полей
    const addFields = () => {
        let newfield = { name: '', age: '' }
        setInputFields([...inputFields, newfield])
    }

    //удаление полей
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }
    


    //здесь сохраняются все данные из всех форм
    const [userData, setUserData] = useState(null);


    //объединение всех данных из форм 
    const handleSubmit = (e) => {
        e.preventDefault();

        const combinedData = {
            testName,
            subtestName,
            levelName
        };

        setUserData(combinedData);
        console.log(JSON.stringify(combinedData, null, 2)); // Вывод в консоль в формате JSON с отступами
    };

    return(
         <>
        <div>
        <h2>Создание пунктов внутри подраздела</h2>

        <form onSubmit={handleSubmit}>
            {/* Форма 1: Имя и Фамилия */}
            <div>
                <label htmlFor="testName">Название раздела:</label>
                <input
                    type="text"
                    id="testName"
                    value={testName}
                    readonly="readonly"
                />
            </div>
            <div>
                <label htmlFor="subtestName">Название подраздела:</label>
                <input
                    type="text"
                    id="levelName"
                    value={subtestName}
                    readonly="readonly"
                />
            </div>
            <div>
                <label htmlFor="levelName">Уровень:</label>
                <input
                    type="text"
                    id="levelName"
                    value={levelName}
                    readonly="readonly"
                />
            </div>
            {/* динамическая форма интерфейс */}
            {inputFields.map((input, index) => {
                return (
                    <div key={index}>
                        <input
                            name='name'
                            placeholder='Name'
                            value={input.name}
                            onChange={event => handleFormChange(index, event)}
                        />
                        <input
                            name='age'
                            placeholder='Age'
                            value={input.age}
                            onChange={event => handleFormChange(index, event)}
                        />
                        <button onClick={() => removeFields(index)}>Remove</button>
                        </div>
                )
                })}
                <button onClick={addFields}>Add More..</button>
                    

            <button type="submit">Отправить</button>
        </form>

        {/* Отображение данных (по желанию) */}
        {userData && (
            <div>
            <h3>Отправленные данные:</h3>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
        )}
        </div>
            
            </>
        )
}