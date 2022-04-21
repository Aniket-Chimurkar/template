import { useState } from 'react'
import styled from "styled-components"
import './App.css'

import { Startdate } from './components/Start_date';

const Div=styled.div`
background-color:${({theme})=>theme==="dark"?"rgb(46, 43, 49);" :"rgb(233, 223, 236)"};
border: 1px solid black;
`
const Button=styled.div`
background-color:${({theme})=>theme==="dark"?"rgb(93, 94, 153)" : "black"};
color:${({theme})=>theme==="dark"?"black" : "white"};
padding: 10px 20px;
  width: 100px;
  border-radius: 3px;
  color: white;
  border: none;
  margin-top: 30px;
`

function App() {
  const [theme, setTheme]= useState("light")

  return (
    <Div className="App"   theme={theme}>
       
       <button   theme={theme}
         onClick={()=>{setTheme(theme==="light" ?"dark": "light")}}
         >change theme</button>

        <Startdate  theme={theme}  />
  
        <Button theme={theme} >Set date</Button>
    </Div>
  )
}

export default App
