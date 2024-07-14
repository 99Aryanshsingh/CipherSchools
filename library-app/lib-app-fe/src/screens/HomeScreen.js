import { useNavigate } from "react-router-dom";

const { useState, useEffect } = require("react");
const { getLocalStorageUser, logoutUser } = require("../utils/AuthUtil");
const { default: LibrarianHomeScreen } = require("./LibrarianHomeScreen");
const { default: StudentHomeScreen } = require("./StudentHomeScreen");

const HomeScreen=()=>{
    const[userType,setUserType]=useState("");

    useEffect(()=>{
        const user=getLocalStorageUser();
        if(user){
            setUserType(user.type);
        }
    },[]);

    const navigate=useNavigate();

    if(!userType.length){
        return <h3>Loading...</h3>;
    }

    const getHomeScreen=()=>{
        return userType==="LIBRARIAN"?(<LibrarianHomeScreen/>):(<StudentHomeScreen/>);
        
    };
    return(
        <section className="app-section">
            <button className="ui secondary button" onClick={async()=>{
                await logoutUser();
                navigate("/login");
            }}>Logout</button>
            {getHomeScreen()}
        </section>
    )
};

export default HomeScreen;