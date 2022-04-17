import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import {Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


export const Dashboard = () => {
  const { token, isAuthenticated } = useSelector((state) => state.login);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // console.log(token);
  const [emploi, setemploi] = useState([]);
  const [Count, setCount] = useState(1);
  const navigate=useNavigate()
  useEffect(() => {
    getData(Count);
  }, [Count]);

  const handleChange = () => {
    if (Count >= 1 && Count < 6) {
      setCount(Count + 1);
    }
  };
  const handleChange1 = () => {
    if (Count > 1 && Count <= 6) {
      setCount(Count - 1);
    }
  };

  const getData = (count) => {
    axios
      .get(`http://localhost:8080/users?_page=${count}&_limit=2`)
      .then((res) => {
        setemploi(res.data);
      });
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }


  return (
    <>
      
      <div className="products">
        <h1>Home-page</h1>
        <table>
          <tr>
            <th>images</th>
            <th>username</th>
            <th>gender</th>
            <th>age</th>
            <th>show schedule</th>
          </tr>

          {emploi.map((e) => (
            <tr>
              <td>
                <img src={e.img} height="150px" width="150px" />
              </td>
              <td>{e.username}</td>
              <td>{e.gender}</td>
              <td>{e.age}</td>
              <td    onClick={()=>{
            
            navigate(`/teachers/dash1`)
            
           }}>
               schedule
              </td>
            </tr>
          ))}
        </table>

        <button onClick={handleChange1}>prev</button>
        <button onClick={handleChange}>next</button>
      </div>
    </>
  );
};
