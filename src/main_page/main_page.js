import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Dropdown } from "react-bootstrap";

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//Персональные компоненты
import Block_info_2 from "./Block_info_2";
import Block_info_form from "./Block_info_form";
import Dropdown_block_choose from "./Dropdown_block_choose";
import Block_control_fabrics from "./Block_control_fabrics";
import Block_select_audit from "./block_select_audit";

import Block_info_3 from "./block_info_3";

//потом удалить эти компоненты
import Block_planned_audit from "./Block_planned_audit";
import Block_audit_history_v2 from "./Block_audit_history_v2";
import Block_audit_history_user from "./Block_audit_history_user";
import Block_create_test_page from "./Block_create_test_page";




//стили
import "./main_page_css.css"


const type_of_users=["admin","moderator","moderator_create_audit","moderator_check_results","auditor","worker_RPS"]


export default function Main_page(){
    // const [flag, setflagvalue]=useState("Admin")
    let flag=type_of_users[0];
    return(
        <>
        <Main_Header/>
        <div className="block_page">

            {/* <Card className="main_page_card_title_1">
                <Card.Body>
                    <h3>Добро пожаловать *Пользователь*</h3>
                </Card.Body>
            </Card> */}
            <div className="main_page_card_title_2">
                <h3 className="main_page_card_title_2_value">Добро пожаловать {flag}</h3>
            </div>

            {/* {(flag==="admin" || flag==="auditor")?<Block_info_2/>:null} */}

            {/* {flag=="Admin"?<Block_info_3/>:null} */}

            {/* {(flag==="admin" || flag==="auditor")?<Dropdown_block_choose info={{lable:"Мои аудиты v3",sub_level:"форма для аудита",link_page:"/test_page_v4"}}/>:null} */}

            {(flag==="admin" || flag==="auditor")?<Block_select_audit info={{lable:"Мои аудиты v3",sub_level:"форма для аудита",link_page:"/test_page_v4"}}/>:null}
            
            {(flag==="admin" || flag==="worker_RPS")?<Block_control_fabrics info={{lable:"Самооценка завода",subinfo:"Внесение самооценки завода"}}/>:null}
            {/* {(flag==="admin" || flag==="worker_RPS")?<Block_control_fabrics info={{lable:"Заполнить сроки пунктов",subinfo:"Форма заполнения сроков пунктов у завода"}}/>:null} */}


            {/* {(flag==="admin" || flag==="auditor")?<Block_info_form/>:null} */}
            {/* {(flag==="admin" || flag==="auditor")?<Dropdown_block_choose info={{lable:"Назначить самоконтроль", sub_level:"Назначить самоконтроль для завода", }}/>:null} */}
            {(flag==="admin" || flag==="moderator" || flag==="moderator_create_audit")?<Dropdown_block_choose info={{lable:"Спланировать аудит",sub_level:"форма для организации аудита",link_page:"/Planning_audit_page"}}/>:null}
            {(flag==="admin" || flag==="moderator"| flag==="moderator_create_audit" | flag==="moderator_check_results")?<Dropdown_block_choose info={{lable:"История аудитов", sub_level:"Список организованных аудитов",link_page:"/Planning_history_audit_page"}}/>:null}
            {/* {(flag==="admin" || flag==="auditor" || flag==="moderator" )?<Dropdown_block_choose info={{lable:"История аудитов для аудиторов", sub_level:"Список организованных аудитов для пользователей",link_page:"/History_audit_users_page"}}/>:null} */}
            {/* {(flag==="admin" || flag==="moderator")?<Dropdown_block_choose info={{lable:"Изменение формулировок текста ДК ТОС", sub_level:"Изменение и создание новых разделов, подразделов, пунктах в аудитах", link_page:"/Tests_name_page"}}/>:null} */}
            {(flag==="admin" || flag==="moderator")?<Dropdown_block_choose info={{lable:"Изменение в ДК ТОС", sub_level:"Изменение и создание новых разделов, подразделов, пунктах в аудитах и заполнение сроков", link_page:"/pag_2"}}/>:null}

        </div>
        <UnderBar/>        
        </>
    )
};
