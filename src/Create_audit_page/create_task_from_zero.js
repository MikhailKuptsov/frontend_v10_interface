import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

import { Button } from 'react-bootstrap';

//персональные компоненты
import Create_task_from_zero_form from './create_task_zero_form';
import Create_task_from_zero_form_v2 from './create_task_zero_form_v2';



export default function Create_task_from_zero() {
    
    return(
        <>
        <Main_Header/>
                <div className="block_page_create_test">
                    {/* <Create_task_from_zero_form/>*/}
                    <Create_task_from_zero_form_v2/>
                </div>
        <UnderBar/>
        </>
    )
}
