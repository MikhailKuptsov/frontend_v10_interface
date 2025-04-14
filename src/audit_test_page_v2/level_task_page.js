import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';


//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//Персональные компоненты

//стили
import "./audit_page_style.css"
import "./level_test_style.css"


export default function Audit_test_task_page(){
    const [testData, setTestData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [key, setKey] = useState('контрольная работа 1');

  useEffect(() => {
    const mockData = [
      {
        name: "контрольная работа 1",
        test_value: {
          level_1: [
            { task_1: "ты выполнил задачу?", dead_line: "10.10.25", yes_no_anser: true, value_anser: false, comments: true },
            { task_2: "сколько тебе лет?", dead_line: "11.10.25", yes_no_anser: false, value_anser: true, comments: false }
          ],
          level_2: [
            { task_1: "ты пришёл", dead_line: "20.10.25", yes_no_anser: true, value_anser: false, comments: true },
            { task_2: "сколько ты отжался?", dead_line: "31.10.25", yes_no_anser: false, value_anser: true, comments: false }
          ]
        }
      },
      {
        name: "контрольная работа 2",
        test_value: {
          level_1: [
            { task_1: "ты нарисовал картину?", dead_line: "10.10.25", yes_no_anser: true, value_anser: false, comments: true },
            { task_2: "сколько  цветов в радуге?", dead_line: "11.10.25", yes_no_anser: false, value_anser: true, comments: false }
          ],
          level_2: [
            { task_1: "ты мужчина?", dead_line: "20.10.25", yes_no_anser: true, value_anser: false, comments: true },
            { task_2: "сколько натуральных цифр от 1 до 5?", dead_line: "31.10.25", yes_no_anser: false, value_anser: true, comments: false }
          ]
        }
      }
    ];

    setTestData(mockData);
  }, []);

  const handleAnswerChange = (testName, level, taskName, field, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [testName]: {
        ...prevAnswers[testName],
        [level]: {
          ...prevAnswers[testName]?.[level],
          [taskName]: {
            ...prevAnswers[testName]?.[level]?.[taskName],
            [field]: value
          }
        }
      }
    }));
  };

  const handleSubmit = () => {
    const cleanAnswers = {};

    for (const testName in answers) {
      if (answers.hasOwnProperty(testName)) {
        cleanAnswers[testName] = {};
        for (const level in answers[testName]) {
          if (answers[testName][level]) { // Check if level exists
            cleanAnswers[testName][level] = {};
            for (const taskName in answers[testName][level]) {
              if (answers[testName][level].hasOwnProperty(taskName)) {
                let taskAnswer = answers[testName][level][taskName];
                if (Object.keys(taskAnswer).length === 0) {
                  taskAnswer = null; // Set to null if no answers provided
                }
                cleanAnswers[testName][level][taskName] = taskAnswer;
              }
            }
          }
        }
      }
    }

    console.log("Clean Answers:", JSON.parse(JSON.stringify(cleanAnswers)));
  };

    return(
        <>
                <div ><Main_Header/></div>
                <div className="block_page_audit">
                    <div className="container">
                    <div >
                        <h3>Завод:*название завода*</h3>
                        <h3>Раздел:*название раздела*</h3>
                        <h3>Подраздел:*название подраздела*</h3>
                    </div> 

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {testData.map((test) => (
          <Tab eventKey={test.name} title={test.name} key={test.name}>
            {Object.keys(test.test_value).map((level, levelIndex) => (
              <div key={levelIndex}>
                <h3>{level}</h3>
                {test.test_value[level].map((task, taskIndex) => {
                  const taskName = Object.keys(task)[0];
                  const taskDetails = task[taskName];

                  return (
                    <div key={taskIndex}>
                      <p>{taskName}: {taskDetails}</p>
                      <p>Deadline: {task.dead_line}</p>

                      {task.yes_no_anser && (
                        <Form.Group>
                          <Form.Label>Ответ:</Form.Label>
                          <Form.Check
                            type="radio"
                            label="Да"
                            name={`${test.name}-${level}-${taskName}-yesno`}
                            value="true"
                            onChange={(e) => handleAnswerChange(test.name, level, taskName, 'yes_no', e.target.value === 'true')}
                          />
                          <Form.Check
                            type="radio"
                            label="Нет"
                            name={`${test.name}-${level}-${taskName}-yesno`}
                            value="false"
                            onChange={(e) => handleAnswerChange(test.name, level, taskName, 'yes_no', e.target.value === 'true')}
                          />
                        </Form.Group>
                      )}

                      {task.value_anser && (
                        <Form.Group>
                          <Form.Label>Ответ:</Form.Label>
                          <Form.Control
                            type="number"
                            onChange={(e) => handleAnswerChange(test.name, level, taskName, 'value', e.target.value)}
                          />
                        </Form.Group>
                      )}

                      {task.comments && (
                        <Form.Group>
                          <Form.Label>Комментарий:</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            onChange={(e) => handleAnswerChange(test.name, level, taskName, 'comment', e.target.value)}
                          />
                        </Form.Group>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </Tab>
        ))}
      </Tabs>

      <Button variant="primary" onClick={handleSubmit}>Отправить</Button>
    </div>
                </div>
                <UnderBar/>
        </>
    )
}

