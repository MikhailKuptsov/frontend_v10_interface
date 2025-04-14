import React, { useState } from 'react';
import Select from 'react-select';

//стили
import './main_page_css.css'
import { Button } from 'react-bootstrap';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    place: '',
    startDate: '',
    endDate: '',
  });

  const [peopleData, setPeopleData] = useState([
    {
      person: '',
      section: '',
      subsection: '',
      access: false,
    },
  ]);

  const handleEventChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handlePlaceChange = (selectedOption) => {
    setEventData({ ...eventData, place: selectedOption.value });
  };

  const handlePeopleChange = (index, e) => {
    const updatedPeopleData = [...peopleData];
    if (e.target.type === 'checkbox') {
      updatedPeopleData[index] = {
        ...updatedPeopleData[index],
        [e.target.name]: e.target.checked,
      };
    } else {
      updatedPeopleData[index] = {
        ...updatedPeopleData[index],
        [e.target.name]: e.target.value,
      };
    }
    setPeopleData(updatedPeopleData);
  };

  const handleAddPerson = () => {
    setPeopleData([
      ...peopleData,
      {
        person: '',
        section: '',
        subsection: '',
        access: false,
      },
    ]);
  };

  const handleDeletePerson = (index) => {
    const updatedPeopleData = [...peopleData];
    updatedPeopleData.splice(index, 1);
    setPeopleData(updatedPeopleData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...eventData,
      people: peopleData,
    };

    console.log(formData);

    setEventData({ place: '', startDate: '', endDate: '', leader_audit:'' });
    setPeopleData([
      { person: '', section: '', subsection: '', access: false },
    ]);
  };

  // Данные для dropdown "Раздел"
  const sectionOptions = ['Менеджмент', 'Подготовка производства', 'SF-m Ручные операции', 
    'SF-e оборудование','ОТиБ', 'Качество','Цепочка поставок','Техническое развитие'];

  // Функция для получения списка подразделов в зависимости от выбранного раздела
  const getSubsectionOptions = (section) => {
    switch (section) {
      case 'Менеджмент':
        return ['M1 Достижение ключевых показателей эффективности завода',
                'М2 Эталонный поток изготовления продукции',
                'M3 Культура производства (корпоративная культура) и 5С',
                'М4.1 Оценка компетенций персонала',
                'М4.2 Обучение сотрудников',
                'М5 Конкурс по ПС и обмен опытом',
                'М6 Операционная деятельность',
                'M7 Реакционная способность ',
                'M8 Постоянные улучшения (кайдзен)'
            ];
      case 'Подготовка производства':
        return ['i1 Взаимодействие конструкторов (разработчик продукции) и подготовки производства',
                'i2 Управление изменениями (КИ и изменения трудоемкости/процессов)',
                'i3 Техническая документация ',
                'i4 Управление трудоемкостью',
                'i5 Балансировка линии (БЛ)',
                'i6 Управление материалами и потоками',
                'i7 Специальные процессы и аттестация операторов.',
                'i8 Оптимизация себестоимости выпускаемой продукции',
                'i9 Эргономика',
                'i10 Управление оборудованием',
                'i11 Расчет и анализ ОЭО критичного (лимитирующего) оборудования',
                'i12 Автономное обслуживание оборудование.TPM',
                'i13 Выполнение плановых ремонтов. Проверка оборудования на технологическую точность.',
                'i14 Оптимизация затрат на обслуживание и ремонт оборудования.',
                'i15 Управление оснасткой',
                'i16 Выполнение плановых ремонтов. Проверка оснастки на технологическую точность.'];
      case 'SF-m Ручные операции':
        return ['SFm1 Обучение и осведомленность персонала о системе 5S + Самооценка 5S', 
                'SFm2 Балансировка и менеджмент производственного персонала',
                'SFm3 Выполнение планов производства, товарного выпуска и реализации',
                'SFm4 Обеспеченность ДСЕ / ТМЦ',
                'SFm5 КПЭ УПТСЛ',
                'SFm6 Работа в модуле УПТСЛ',
                'SFm7 Операционная деятельность и КПЭ',
                'SFm8 КПСЦ цеха',
                'SFm9 Постоянные улучшения (кайдзен)',
                'SFm10 Стандартизированная работа. Разработка и внедрение СОК на ЭЛ',];
      case 'SF-e оборудование':
        return ['SFe1 Обучение и осведомленность персонала о системе 5S + Самооценка 5S', 
                'SFe2 КПСЦ цеха', 
                'SFe3 Постоянные улучшения (кайдзен)',
                'SFe4 Операционная деятельность и КПЭ',
                'SFe5 Выполнение стандартной работы (СР) и отслеживание выпуска изделий (ОЭО)',
                'SFe6 SMED',
                'SFe7 Первоначальная чистка шаг 1-2',
                'SFe8 Внедрение Автономного обслуживания'];
      case 'ОТиБ':
        return ['ОТ 1 ОТ и ТБ на участках  с ручными операциями', 'ОТ 2 ОТ и ТБ на участках с оборудованием', 'ОТ 3 Управление ОТиТБ'];
      case 'Качество':
        return ['Q1 Оценка и аккредитация новых поставщиков по качеству',
                'Q2 Оценка действующих поставщиков',
                'Q3 Развитие качества поставщиков',
                'Q4 Возврат затрат на некачественную продукцию поставщиков',
                'Q5 ?',
                'Q6 Входной контроль',
                'Q7 Детали, произведённые внутри компании: Квалификационные испытания продукции ',
                'Q8 План управления качеством компонентов, подсборки и сборки',
                'Q9 Бездефектное производство продукции',
                'Q10 Контроль процессов изготовления продукции',
                'Q11 Управление несоответствиями в производстве',
                'Q12 Решение систематических проблем производственного характера и Самооценка',
                'Q13 Метрология: система, методы и процесс'];
      case 'Цепочка поставок':
        return ['SC1 Работа с поставщиками',
                'SC2 Снижение себестоимости',
                'SС3 Спецификация логистики',
                'SС4 Аудит знаний',
                'SС5 Управление приемкой',
                'SС6 Управление размещением и хранением',
                'SС7 Управление сборкой, комплектацией и отгрузкой',
                'SС8 Управление внутренним транспортом',
                'SС9 Доставка привлеченным транспортом',
                'SС10 Управление железнодорожными перевозками',
                'SC11 Работа с забракованной продукцией'];
      case 'Техническое развитие':
        return ['Т1 Стандартизация и унификация ', 'Т2 Подтверждение соответствия и испытания'];
      default:
        return [];
    }
  };

  // Данные для dropdown "Место"
  const placeOptions = [
    { value: 'УЛРЗ', label: 'УЛРЗ' },
    { value: 'ЧЭРЗ', label: 'ЧЭРЗ' },
    { value: 'ВТРЗ', label: 'ВТРЗ' },
    { value: 'УУЛВРЗ', label: 'УУЛВРЗ' },
    { value: 'АТРЗ', label: 'АТРЗ' },
    { value: 'ЯЭРЗ', label: 'ЯЭРЗ' },
    { value: 'ОЛРЗ', label: 'ОЛРЗ' },
    { value: 'РЭРЗ', label: 'РЭРЗ' },
  ];

  // Данные для автокомплита "Человек" (пример)
  const personOptions = [
    { value: 'Иван Иванов Иванович', label: 'Иван Иванов Иванович' },
    { value: 'Петр Петров', label: 'Петр Петров' },
    { value: 'Анна Сидорова', label: 'Анна Сидорова' },
    { value: 'Елена Смирнова', label: 'Елена Смирнова' },
  ];

  const [inputValue, setInputValue] = useState('');

  const handlePersonInputChange = (index, newValue) => {
    const updatedPeopleData = [...peopleData];
    updatedPeopleData[index] = {
      ...updatedPeopleData[index],
      person: newValue,
    };
    setPeopleData(updatedPeopleData);
  };

  const handlePersonSelect = (index, selectedOption) => {
    const updatedPeopleData = [...peopleData];
    updatedPeopleData[index] = {
      ...updatedPeopleData[index],
      person: selectedOption ? selectedOption.value : '',
    };
    setPeopleData(updatedPeopleData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Сведения о мероприятии</h2>

      <div className='form_elements_v2' >
        <div className='form_element_1'>
          <label htmlFor="place">Место:</label>
          <select
            id="place"
            name="place"
            value={eventData.place}
            onChange={handleEventChange}
            required
          >
            <option value="">Выберите место</option>
            {placeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className='form_element_1'>
          <label htmlFor="startDate">Дата начала:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={eventData.startDate}
            onChange={handleEventChange}
            required
          />
        </div>

        <div className='form_element_1'>
          <label htmlFor="endDate">Дата окончания:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={eventData.endDate}
            onChange={handleEventChange}
            required
          />
        </div>
        <div className='form_element_1'>
          <label htmlFor="leader_audit">Лидер аудита:</label>
          <input
            type="text"
            id="leader_audit"
            name="leader_audit"
            value={eventData.leader_audit}
            onChange={handleEventChange}
            required
          />
        </div>
      </div>
      

      <h3>Выберите участников</h3>

      {peopleData.map((person, index) => (
        <div key={index} style={{border: "2px solid black", borderRadius:"5px",marginTop:"2px"}}>
          <div className='form_element_2'>
            <label htmlFor={`person-${index}`}>Человек:</label>
            <input
              type="text"
              id={`person-${index}`}
              name="person"
              value={person.person}
              onChange={(e) => handlePeopleChange(index, e)}
              list="personOptions"
            />
            <datalist id="personOptions">
              {personOptions.map((option) => (
                <option key={option.value} value={option.value} />
              ))}
            </datalist>
          </div>

          <div className='form_element_2'>
            <label htmlFor={`section-${index}`}>Раздел:</label>
            <select
              id={`section-${index}`}
              name="section"
              value={person.section}
              onChange={(e) => handlePeopleChange(index, e)}
              required
            >
              <option value="">Выберите раздел</option>
              {sectionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className='form_element_2'>
            <label htmlFor={`subsection-${index}`}>Подраздел:</label>
            <select
              style={{width:"100%"}}
              id={`subsection-${index}`}
              name="subsection"
              value={person.subsection}
              onChange={(e) => handlePeopleChange(index, e)}
              required
              disabled={!person.section}
            >
              <option value="">Выберите подраздел</option>
              {getSubsectionOptions(person.section).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className='form_element_2'>
            <label htmlFor={`access-${index}`}>Доступ к результатам:</label>
            <input
              type="checkbox"
              id={`access-${index}`}
              name="access"
              checked={person.access}
              onChange={(e) => handlePeopleChange(index, e)}
            />
          </div>

          <Button style={{margin:"5px"}} type="button" variant='outline-danger' onClick={() => handleDeletePerson(index)}>
            Удалить
          </Button>
        </div>
      ))}
      
      <div >
      <Button type="button" style={{margin:"5px"}} variant='outline-dark' onClick={handleAddPerson}>
        Добавить участника
      </Button>

      <Button type="submit" style={{margin:"5px"}}  variant='outline-success' >Отправить</Button>
      </div>
    </form>
  );
};

export default EventForm;