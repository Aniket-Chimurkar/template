import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupFailure, signupLoading, signupSuccess } from "../Redux/SignUp/action";

export const SignUp=()=>{
    const [username, setUsername]= useState("")
    const [password, setPassword ]= useState("");
    const [name, setName ]= useState("");
    const [email, setEmail ]= useState("");
    const [description, setDescription ]= useState("");
    const [mobile, setMobile ]= useState("");

 

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleSubmit=()=>{
        const userDetail={
            name,
            email,
            password,
            username,
            mobile,
            description
        };

        dispatch(signupLoading());  //set loading status to true

        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            method:"POST",
            body: JSON.stringify(userDetail),
            headers:{
                 "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(signupSuccess(res.token));
            navigate("/login");
        })
        .catch((err)=>dispatch(signupFailure(err)))
    }
    return (
        <div>
            <input type="text"
                placeholder="Enter name" 
                value={ name }
                onChange={(e)=>{setName(e.target.value)}} 
                />

                <br />

                <input type="text"
                placeholder="Enter Email" 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}} 
                />

                <br />

                <input type="text"
                placeholder="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                  />       

                <br />

                <input type="text"
                placeholder="Enter username" 
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}} 
                />

               <br />

                <input type="number"
                placeholder="Enter Mobile no" 
                value={ mobile }
                onChange={(e)=>{setMobile(e.target.value)}} 
                />

                <br />

           <input type="text"
                placeholder="Enter description" 
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}} 
                />

           <br />

        

        <button onClick={handleSubmit}>SignUp</button>
        </div>
    )
}