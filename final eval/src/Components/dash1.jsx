import axios from "axios";
import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom"

export const Classes=()=>{

     const {id}=useParams();
    const [user, setuser]=useState([]);


    const  getdata=()=>{
        axios.get(`http://localhost:8080/users/${id}`)
        .then((res)=>{
            setuser(res.data.classes)
            
        })
    }

    useEffect(()=>{
      getdata();
    },[])

    return (
        <div>
            

             <h2>Name : {user.username}</h2>
           


             
             <table>
             <tr>
               <th>Grade</th>
               <th>Section </th>
               <th>Subject</th>
              
             </tr>
             <tr>
             
              
             {/* {user.map((e,i)=><tr key={i} >
                <td>{e.grade}</td>
                <td>{e.section}</td>
               
                <td>{e.subject}</td>
            
           </tr>
           )}  */}



            </tr>
 
         </table>


        </div>
    )
}