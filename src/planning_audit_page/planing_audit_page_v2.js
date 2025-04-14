import React, { useState } from 'react';

// import EmployeeForm from './Test_FORM_v2';
import Form_page_with_data from './form_page_with_data';
import Form_page_with_data_v2 from './form_page_with_data_v2';
import EmployeeForm_v3 from './table_form_v7';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

import './planning_audit_page.css'

export default function Planning_audit_page_v2(){

    return(
        <>
        <Main_Header/>
        <div className="block_page_planning_audits">
            <div className='table_form_v3_style'>
            {/* <EmployeeForm/> */}
            {/* <Form_page_with_data/> */}
            {/* <Form_page_with_data_v2/> */}
            <EmployeeForm_v3/>
            </div>
        </div>
        <UnderBar/>
        </>
    )
}