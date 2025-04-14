import React from "react";
import { Table, Button } from "react-bootstrap";

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

import './planning_audit_page.css'

export default function Planning_audit_page(){

    return(
        <>
        <Main_Header/>
        <div className="block_page_planning_audits">
            <div>
            <label>Выберите завод:</label><br/>
            <input
            type="text"
            placeholder="Введите завод"/><br/>
            </div>
            <div>
            <label>Введите дату начала:</label><br/>
            <input
            type="date"
            /><br/>
            </div>
            <div>
            <label>Введите дату окончания:</label><br/>
            <input
            type="date"
            /><br/>
            </div>
            <div>
            <label>Лидер аудита:</label><br/>
            <input
            type="text"
            /><br/>
            </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Раздел</th>
                <th >Подразделы</th>
                <th>Сотрудник</th>
                <th>Доступ к результатам</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Менеджмент</td>
                <td><div>
                <p>Все</p>
                <p>'M1 Достижение ключевых показателей эффективности завода'</p>
                <p>'М2 Эталонный поток изготовления продукции'</p>
                <p>'M3 Культура производства (корпоративная культура) и 5С'</p>
                <p>'М4.1 Оценка компетенций персонала'</p>
                <p>'М4.2 Обучение сотрудников'</p>
                <p>'М5 Конкурс по ПС и обмен опытом'</p>
                <p>'М6 Операционная деятельность'</p>
                <p>'M7 Реакционная способность '</p>
                <p>'M8 Постоянные улучшения (кайдзен)'</p>
                    </div></td>
                <td>
                    <div className="block_input_audit">
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/></div></td>
                <td><div lassName="block_input_audit">
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    </div></td>
                </tr>
                <tr>
                <td>Подготовка производства</td>
                <td>
                <p>Все</p> 
                <p>'i1 Взаимодействие конструкторов (разработчик продукции) и подготовки производства'</p>
                <p>'i2 Управление изменениями (КИ и изменения трудоемкости/процессов)'</p>
                <p>'i3 Техническая документация '</p>
                <p>'i4 Управление трудоемкостью'</p>
                <p>'i5 Балансировка линии (БЛ)'</p>
                <p>'i6 Управление материалами и потоками'</p>
                <p>'i7 Специальные процессы и аттестация операторов.'</p>
                <p>'i8 Оптимизация себестоимости выпускаемой продукции'</p>
                <p>'i9 Эргономика'</p>
                <p>'i10 Управление оборудованием'</p>
                <p>'i11 Расчет и анализ ОЭО критичного (лимитирующего) оборудования'</p>
                <p>'i12 Автономное обслуживание оборудование.TPM'</p>
                <p>'i13 Выполнение плановых ремонтов. Проверка оборудования на технологическую точность.'</p>
                <p>'i14 Оптимизация затрат на обслуживание и ремонт оборудования.'</p>
                <p>'i15 Управление оснасткой'</p>
                <p>'i16 Выполнение плановых ремонтов. Проверка оснастки на технологическую точность.'</p></td>
                <td><div className="block_input_audit">
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/></div></td>
                <td><input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/></td>
                </tr>
            
                <tr>
                <td>SF-m ручные производства</td>
                <td>
                    <p>Все</p>
                    <p>'SFm1 Обучение и осведомленность персонала о системе 5S + Самооценка 5S'</p> 
                    <p>'SFm2 Балансировка и менеджмент производственного персонала'</p>
                    <p>'SFm3 Выполнение планов производства товарного выпуска и реализации'</p>
                    <p>'SFm4 Обеспеченность ДСЕ / ТМЦ'</p>
                    <p>'SFm5 КПЭ УПТСЛ'</p>
                    <p>'SFm6 Работа в модуле УПТСЛ'</p>
                    <p>'SFm7 Операционная деятельность и КПЭ'</p>
                    <p>'SFm8 КПСЦ цеха'</p>
                    <p>'SFm9 Постоянные улучшения (кайдзен)'</p>
                    <p>'SFm10 Стандартизированная работа. Разработка и внедрение СОК на ЭЛ'</p>
                    </td>
                <td><div className="block_input_audit">
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        </div></td>
                <td><input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/></td>
                </tr>
                <tr>
                <td>SF-e оборудование</td>
                <td >
                    <p>Все</p>
                    <p>'SFe1 Обучение и осведомленность персонала о системе 5S + Самооценка 5S'</p>
                    <p>'SFe2 КПСЦ цеха'</p>
                    <p>'SFe3 Постоянные улучшения (кайдзен)'</p>
                    <p>'SFe4 Операционная деятельность и КПЭ'</p>
                    <p>'SFe5 Выполнение стандартной работы (СР) и отслеживание выпуска изделий (ОЭО)'</p>
                    <p>'SFe6 SMED'</p>
                    <p>'SFe7 Первоначальная чистка шаг 1-2'</p>
                    <p>'SFe8 Внедрение Автономного обслуживания'</p>
                </td>
                <td><div className="block_input_audit">
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        </div></td>
                <td><input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/></td>
                </tr>
                <tr>
                <td>ОТиБ</td>
                <td >
                    <p>Все</p>
                    <p>'ОТ 1 ОТ и ТБ на участках  с ручными операциями'</p>
                    <p>'ОТ 2 ОТ и ТБ на участках с оборудованием'</p> 
                    <p>'ОТ 3 Управление ОТиТБ'</p>
                </td>
                <td><div className="block_input_audit">
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        </div></td>
                <td><input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/></td>
                </tr>
                <tr>
                <td>Качество</td>
                <td >
                    <p>Все</p>
                    <p>'Q1 Оценка и аккредитация новых поставщиков по качеству'</p>
                    <p>'Q2 Оценка действующих поставщиков'</p>
                    <p>'Q3 Развитие качества поставщиков'</p>
                    <p>'Q4 Возврат затрат на некачественную продукцию поставщиков'</p>
                    <p>'Q5 ?'</p>
                    <p>'Q6 Входной контроль'</p>
                    <p>'Q7 Детали произведённые внутри компании: Квалификационные испытания продукции '</p>
                    <p>'Q8 План управления качеством компонентов подсборки и сборки'</p>
                    <p>'Q9 Бездефектное производство продукции'</p>
                    <p>'Q10 Контроль процессов изготовления продукции'</p>
                    <p>'Q11 Управление несоответствиями в производстве'</p>
                    <p>'Q12 Решение систематических проблем производственного характера и Самооценка'</p>
                    <p>'Q13 Метрология: система методы и процесс'</p>
                </td>
                <td><div className="block_input_audit">
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        </div></td>
                <td><input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/></td>
                </tr>
                <tr>
                <td>Цепочка поставок</td>
                <td>
                    <p>Все</p>
                <p>'SC1 Работа с поставщиками'</p>
                <p>'SC2 Снижение себестоимости'</p>
                <p>'SС3 Спецификация логистики'</p>
                <p>'SС4 Аудит знаний'</p>
                <p>'SС5 Управление приемкой'</p>
                <p>'SС6 Управление размещением и хранением'</p>
                <p>'SС7 Управление сборкой комплектацией и отгрузкой'</p>
                <p>'SС8 Управление внутренним транспортом'</p>
                <p>'SС9 Доставка привлеченным транспортом'</p>
                <p>'SС10 Управление железнодорожными перевозками'</p>
                <p>'SC11 Работа с забракованной продукцией'</p>
                </td>
                <td><input className="input_audit" placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/><br/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/></td>
                <td><input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/>
                    <input type="checkbox"/><br/></td>
                </tr>
                <tr>
                <td>Техническое развитие</td>
                <td>
                    <p>Все</p>
                    <p>'Т1 Стандартизация и унификация '</p> 
                    <p>'Т2 Подтверждение соответствия и испытания'</p>
                </td>
                <td> <div className="block_input_audit">
                        <input className="input_audit" placeholder="Введите сотрудника"/>
                        <input className="input_audit"  placeholder="Введите сотрудника"/>
                        
                        </div></td>
                <td> <input type="checkbox"/><br/>
                <input type="checkbox"/><br/></td>
                </tr>
            </tbody>
            </Table>
            <Button variant="outline-dark" style={{margin:"10px"}}>Организовать аудит</Button>

        </div>
        <UnderBar/>
        </>
    )
}