import { RegistrationContext } from "../Context/LoginContext";
import { Navigate } from "react-router-dom";
import React from "react"
export const Two = () => {
  const {
    name,
    age,
    dateOfBirth,
    stateofr,
    address,
    pincode,
    dispatch,
    handleSubmit,
  } = React.useContext(RegistrationContext);

  if(!name || !age || !dateOfBirth){
      return <Navigate to="/registration/one"/>
  }

  return <div>
        <input
        type="text"
        placeholder="enter state of residence"
        value={stateofr}
        onChange={(e) =>
          dispatch({ type: "Change_stateofr", payload: e.target.value })
        }
      />
       <input
        type="text"
        placeholder="enter address"
        value={address}
        onChange={(e) =>
          dispatch({ type: "Change_address", payload: e.target.value })
        }
      />
       <input
        type="text"
        placeholder="enter pincode"
        value={pincode}
        onChange={(e) =>
          dispatch({ type: "Change_pincode", payload: e.target.value })
        }
      />

      <button
      disabled={
        !name ||
        !age ||
        !dateOfBirth ||
        !stateofr ||
        !address ||
        !pincode
      }
      onClick = {handleSubmit}
    
      > submit</button>
      
  </div>;
};
