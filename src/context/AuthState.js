import react from "react";
import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props)=>{
    const st = 
    {
        "uname": "omkar",
        "class": "c"
    }
    const[state,setState] = useState(st);

    const update=()=>{
        setTimeout(()=>{
            setState({"uname":"Someone","class":"100"});
        },2000)
    }

    function Login(){
        fetch("http:/localhost:5000/api/auth/create")
        .then(response=>{response.json()})
        .then(data=>{console.log(data)})
    }
    return(
        <AuthContext.Provider value={{state,update}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;