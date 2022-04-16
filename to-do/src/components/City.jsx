import { RegistrationContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import React from "react";

export const City = () => {
  const { country, city, population, dispatch, handleSubmit } =
    React.useContext(RegistrationContext);
    const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="enter city"
        value={city}
        onChange={(e) =>
          dispatch({ type: "Change_City", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="enter population"
        value={population}
        onChange={(e) =>
          dispatch({ type: "Change_Population", payload: e.target.value })
        }
      />

      <button onClick={handleSubmit} > submit</button>
      <button
          onClick={() => {
            navigate(`/users`);
          }}
        >
          Next
        </button>
  
      
    </div>
  );
};
