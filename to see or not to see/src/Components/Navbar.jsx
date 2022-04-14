import { Link } from "react-router-dom"
import styled from "styled-components"

export const Navbar=()=>{
    const Div= styled.div`
    display:flex;
    justify-content:space-around;
    border: 1px solid black;
    height:50px;
    margin-bottom:30px
    `
    return (
        <Div >

            <Link to="/dashboard">Dashboard</Link>
            <Link to="./Login">Login</Link>
            <Link to="./Signup">SignUp</Link>
          
        </Div>
    )
}