import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//Персональные компоненты

// import Admin_page_v9 from "./admin_page_v9";
import Admin_page_v10 from "./admin_page_v10";

//стили

export default function Admin_page_users_combine(){
    return(
        <>
        
         <div>
            <Main_Header/>
        </div>
        <div className="block_page_audit">
            {/* <Admin_page_v9/> */}
            <Admin_page_v10/>
        </div>
        <div>
            <UnderBar/>
        </div>

        </>
    )
}