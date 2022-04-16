import { useEffect, useState } from "react";
import axios from "axios";
import "./users.css"



export const User = () => {
    const [emploi, setemploi] = useState([]);
    
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = () => {
      axios.get("http://localhost:8080/users").then((res) => {
        setemploi(res.data);
      });
    };

    const handleSort=(sortBy, type)=>{
        
      
            
     
        if(sortBy==="population" && type===1) setemploi((prev)=> [...prev.sort((a,b)=>a.population>b.population?1:-1)])
        if(sortBy==="population" && type===-1) setemploi((prev)=> [...prev.sort((a,b)=>a.population>b.population?-1:1)])

        
    }
    const deletehandle=(id)=>{
        axios.delete(`http://localhost:8080/users/${id}`)
        //         .then((res) => setStatus(res.data))
        .then (getData)
      }

     

  
    console.log(emploi);
  
    return (
      <div>
           <button onClick={()=>{handleSort("population",-1)}}> high to low</button>
            <button onClick={()=>{handleSort("population",1)}}>low to high</button>
           
        <tr>
          <th>ID</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Edit</th>
          <th>delete</th>
        </tr>
        {emploi.map((g) => (
          <tr >
           <td>{g.id}</td>
           <td>{g.country}</td>
           <td>{g.city}</td>
           <td>{g.population}</td>
           <th>`Edit`</th>
           <th onClick={()=>{deletehandle(g.id)}}>`Delete`</th>
          </tr>
        ))}
      </div>
    );
  };
  
