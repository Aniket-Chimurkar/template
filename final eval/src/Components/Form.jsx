import axios from "axios"
import { useState } from "react"


const Form = () =>{

    const [formdata , setformdata] = useState({
        username:"",
        gender:"",
        age:"",
        grade:"",
        section:"",
        subject:"",
        img:"",
        totalclass:""

    })

    const handleChange =(e)=>{
        const { id,value } = e.target;

        setformdata({
            ...formdata,
            [id]:value,
        })
    }

    const handleSubmit =(e)=>{
        // console.log(e.target.id , e.target.value)
        // e.preventDefault()
      axios.post("http://localhost:8080/users" , formdata).then(()=>{
          alert("user created successfully");
          setformdata({
            username:"",
            gender:"",
            age:"",
            grade:"",
            section:"",
            subject:"",
            img:"",
            totalclass:"",
          })
      })
    }

   



return <form id="form">
    <h2>Employee-Details</h2>
    <input id="username" type="text" placeholder="Enter-Name" onChange={handleChange}></input>
    <input id="gender" type="text" placeholder="Enter-gender" onChange={handleChange}></input>
    <input id="age" type="Number" placeholder="Enter-age" onChange={handleChange}></input>
    <input id="grade" type="text" placeholder="Enter-grade" onChange={handleChange}></input>
     <select id="section" onChange={handleChange} >
         <option>a</option>
         <option>b</option>
         <option>c</option>
         </select>
         <select id="subject" onChange={handleChange} >
         <option>hindi</option>
         <option>maths</option>
         <option>english</option>
         <option>science</option>
         </select>
         <input id="img" type="text" placeholder="Enter-img" onChange={handleChange}></input>
         <input id="totalclass" type="text" placeholder="Enter-class" onChange={handleChange}></input>
    <input type="submit" value="submit"  onClick={handleSubmit}></input>
</form>






}

export default Form