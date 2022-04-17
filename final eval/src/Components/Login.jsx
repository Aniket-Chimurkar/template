import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginfailure, loginLoading, loginSuccess } from "../Redux/Login/action";
import "./login.css"

export const Login=()=>{
    const [username, setUsername]= useState("")
    const [password, setPassword ]= useState("");

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleSubmit=()=>{
        const userDetail={
            username,
            password
        };

        dispatch(loginLoading());  //set loading status to true

        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method:"POST",
            body: JSON.stringify(userDetail),
            headers:{
                 "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(loginSuccess(res.token));
            navigate("/dashboard");
        })
        .catch((err)=>dispatch(loginfailure(err)))
    }
    return (
        <div id="login">
            <h1>Login</h1>
         <input id="input1" type="text"
                placeholder="Enter username" 
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}} 
                />

           <br />

         <input type="text"
                placeholder="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}  />       

           <br />

        <button onClick={handleSubmit}>Login</button>
        <p>/signup router to make admin email and password</p>
        </div>
    )
}