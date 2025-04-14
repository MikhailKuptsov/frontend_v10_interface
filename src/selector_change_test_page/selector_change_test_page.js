import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
//компоненты
import Dropdown_block_choose from "../main_page/Dropdown_block_choose";
import Block_control_fabrics from "../main_page/Block_control_fabrics";

const type_of_users=["admin","moderator","moderator_create_audit","moderator_check_results","auditor","worker_RPS"]

export default function Selector_change_test(){
    let flag=type_of_users[0];
    return(
        <>
        <Main_Header/>
        <div className="block_page">
            {(flag==="admin" || flag==="worker_RPS")?<Block_control_fabrics info={{lable:"Заполнить сроки пунктов",subinfo:"Форма заполнения сроков пунктов у завода"}}/>:null}
            {(flag==="admin" || flag==="moderator")?<Dropdown_block_choose info={{lable:"Изменение формулировок текста ДК ТОС", sub_level:"Изменение и создание новых разделов, подразделов, пунктах в аудитах", link_page:"/Tests_name_page"}}/>:null}
        </div>
        <UnderBar/>
        </>
    )
}