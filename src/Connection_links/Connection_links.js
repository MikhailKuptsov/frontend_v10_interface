import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


import Auth_page from '../auth_page/auth_page';

import Main_page from '../main_page/main_page';

import Admin_page from "../admin_page/admin_page_control";
import Settings_page from "../settings_page/settings_page";


import Admin_page_users_combine from "../admin_page_v5/admin_page_combine";
// import Admin_page_users from "../admin_page/admin_page_v5";
// import Person_information_page from "../person_information_page/person_information_page";
// import Create_person_page from "../person_information_page/create_person_page";
// import Edit_person_page from "../person_information_page/edit_person_page";

import Selector_change_test from "../selector_change_test_page/selector_change_test_page";

import Tests_name_page from "../Create_audit_page/tests_name_page";
import Create_test_page from "../Create_audit_page/create_test_page";
import Edit_test_page from "../Create_audit_page/Edit_test_page";

import Subtest_name_page from "../Create_audit_page/subtest_name_page";
import Create_subtest_page from "../Create_audit_page/create_subtest_page";
import Edit_subtest_page from "../Create_audit_page/Edit_subtest_page";

import Level_name_page from "../Create_audit_page/level_name_page";

import Tasks_name_page from "../Create_audit_page/Tasks_name_page";
import Create_task_page from "../Create_audit_page/create_task_page";
import Edit_task_page from "../Create_audit_page/Edit_task_page";
import Create_task_from_zero from "../Create_audit_page/create_task_from_zero";

import One_test_page_v3 from '../audit_test_page/One_test_page_v3'
import test_data from '../tests_data_text/management.json'

import Subtest_choice_page from "../audit_test_page_v2/subtests_choice_page";
import Audit_test_task_page from "../audit_test_page_v2/level_task_page";

import Audit_full_test_page from "../audit_test_page_v3/audit_page_v4";

import Planning_audit_page_v2 from "../planning_audit_page/planing_audit_page_v2";

import Planning_history_audit_page from "../history_of_audits/planning_history_audit_page";
import History_audit_detial_page from "../history_of_audits/history_audit_detail_page";
import History_audit_detial_page_v2 from "../history_of_audits/history_audit_detail_page_v2";
import History_audit_users_page_select from "../history_of_audits/history_audit_users_choice";

import History_of_self_control from "../history_of_audits/history_of_self_control";

import Self_control_full_test_page from "../self_control_test_page/self_control_page";





const connections_links=[
    // Ссылка на Страницу аутентификации
    {path_link:"/", componet_page:<Auth_page/> },
    // Ссылка на главную страницу
    {path_link:"/Main_page", componet_page:<Main_page /> },
    //Страница администратора
    {path_link:"/Admin_page", componet_page:<Admin_page /> },
    //страница администратора настройки
    {path_link:"/Admin_page_settings", componet_page:<Settings_page /> },
    //Страница администратора настройка пользователей
    {path_link:"/Admin_page_users", componet_page:<Admin_page_users_combine/> },
    // {path_link:"/Admin_page_users", componet_page:<Admin_page_users /> },
    // {path_link:"/Person_information_page", componet_page:<Person_information_page /> },
    // {path_link:"/Create_person_page", componet_page:<Create_person_page /> },
    // {path_link:"/Edit_person_page", componet_page:<Edit_person_page /> },


    {path_link:"/pag_2", componet_page:<Selector_change_test /> },

    //Страница создания тестов - название раздела
    {path_link:"/Tests_name_page", componet_page:<Tests_name_page /> },
    //-создать раздел
    {path_link:"/Create_test_page", componet_page:<Create_test_page /> },
    //редактировать раздел
    {path_link:"/Edit_test_page", componet_page:<Edit_test_page /> },
    

    // страница подразделов
    {path_link:"/Subtest_name_page", componet_page:<Subtest_name_page /> },
    //-создать подраздел
    {path_link:"/Create_subtest_page", componet_page:<Create_subtest_page /> },
    //редактировать раздел
    {path_link:"/Edit_subtest_page", componet_page:<Edit_subtest_page /> },

    // страница Уровней
    {path_link:"/Level_name_page", componet_page:<Level_name_page /> },

    // страница с пунктами
    {path_link:"/Tasks_name_page", componet_page:<Tasks_name_page /> },
    //Создать пункт
    {path_link:"/Create_task_page", componet_page:<Create_task_page /> },
    //Редактировать пункт
    {path_link:"/Edit_task_page", componet_page:<Edit_task_page /> },
    //Создание всех пунктов с нуля
    {path_link:"/Create_task_from_zero", componet_page:<Create_task_from_zero /> },


    //страница с тестом по аудиту
    {path_link:"/test_page_v2/management/:fabric_name_2/:audit_name/:time_2",componet_page:<One_test_page_v3 category={test_data.managment_data}/>},


    //страница с тестом по аудиту версия 2
    {path_link:"/test_page_v3/subtest_choice", componet_page:<Subtest_choice_page/> },
    {path_link:"/test_page_v3/Audit_test_task_page", componet_page:<Audit_test_task_page/> },
    //страница с тестом по аудиту версия 3
    {path_link:"/test_page_v4", componet_page:<Audit_full_test_page/> },

    //планирование аудита долго
    {path_link:"/Planning_audit_page", componet_page:<Planning_audit_page_v2 /> },

    //история спланированных аудитов
    {path_link:"//Planning_history_audit_page", componet_page:<Planning_history_audit_page /> },
    //история аудитов по выбранному заводу
    {path_link:"/History_audit_detial_page", componet_page:<History_audit_detial_page /> },
    {path_link:"/History_audit_detail_page_v2",componet_page:<History_audit_detial_page_v2/>},
    //история аудитов для пользователей
    {path_link:"/History_audit_users_page", componet_page:<History_audit_users_page_select /> },

    //история самоконтроля
    {path_link:"/History_of_self_control", componet_page:<History_of_self_control /> },
    //самооценка завода
    {path_link:"/Self_control_v8", componet_page:<Self_control_full_test_page /> },
  ]

export default function Connection_links(){
    const list_of_route=connections_links.map(a=> <Route exact path={a.path_link} element={a.componet_page} />)
    return(
        <>
        <Router>
              {/* Рабочий навбар */}
              {/* <Header /> */}
              {/* Переключение на страницы */}
              <Routes>
                {list_of_route}
              </Routes>
            </Router>
        </>
    )
}