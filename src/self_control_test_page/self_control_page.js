import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//Персональные компоненты

import Self_control_v8 from "./selfcontrol_test_page_v7";

//стили

export default function Self_control_full_test_page(){
    return(
        <>
        
         <div>
            <Main_Header/>
        </div>
        <div className="block_page_audit">
            {/* <Audit_prototype_v3/> */}
            <Self_control_v8/>
        </div>
        <div>
            <UnderBar/>
        </div>

        </>
    )
}