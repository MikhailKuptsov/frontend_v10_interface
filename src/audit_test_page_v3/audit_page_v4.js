import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//Персональные компоненты
import Audit_prototype_v3 from "./test_script_v3";
import Audit_prototype_v8 from "./test_page_v7";

//стили

export default function Audit_full_test_page(){
    return(
        <>
        
         <div>
            <Main_Header/>
        </div>
        <div className="block_page_audit">
            {/* <Audit_prototype_v3/> */}
            <Audit_prototype_v8/>
        </div>
        <div>
            <UnderBar/>
        </div>

        </>
    )
}