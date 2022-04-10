import axios from "axios";
import { useState, useEffect } from "react";
import "./user.css"
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

  console.log(emploi);

  return (
    <div>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Date</th>
        <th>State</th>
        <th>Address</th>
        <th>Pincode</th>
      </tr>
      {emploi.map((g) => (
        <tr >
         <td>{g.name}</td>
         <td>{g.age}</td>
         <td>{g.dateOfBirth}</td>
         <td>{g.stateofr}</td>
         <td>{g.address}</td>
         <td>{g.pincode}</td>
        </tr>
      ))}
    </div>
  );
};

<table>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
</table>;
