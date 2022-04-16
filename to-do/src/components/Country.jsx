import React from "react"
import {RegistrationContext} from "../Context/LoginContext"
import { useNavigate } from "react-router-dom";


export const Country = () => {
    const { country, dispatch } =
      React.useContext(RegistrationContext);
    const navigate = useNavigate();
  
    return (
      <div>
        <input
          type="text"
          placeholder="enter name"
          value={country}
          onChange={(e) =>
            dispatch({ type: "Change_Country", payload: e.target.value })
          }
        />
        <br />
        <button
          onClick={() => {
            navigate(`/add-city`);
          }}
        >
          Next
        </button>
      </div>
    );
  };