import React from 'react'
import om from "./om_logo.svg";
import "./loader.css";
function Loader() {
    return (
        <div className='load_screen'>
            <div className='om_img'>
                <img className='' src={om} alt="" />
            </div>
        </div>
    )
}

export default Loader