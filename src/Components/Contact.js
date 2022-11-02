import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/employee');
    }, 2000)

    // const handleChangePage = () => {
    //         navigate('/employee');
    // }

    return (
        <React.Fragment>
            <h4>Contact Information</h4>
            <p>tel: 99999999</p>
            <p>admin@gmail.com</p>
            {/* <button onClick={handleChangePage}></button> */}

            
        </React.Fragment>
    )
}

export default Contact;