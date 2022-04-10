import React from "react";
import { RegistrationContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
export const One = () => {
  const { name, age, dateOfBirth, dispatch } =
    React.useContext(RegistrationContext);
  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) =>
          dispatch({ type: "Change_Name", payload: e.target.value })
        }
      />
       <input
        type="number"
        placeholder="enter age"
        value={age}
        onChange={(e) =>
          dispatch({ type: "Change_Age", payload: e.target.value })
        }
      />
       <input
        type="date"
        placeholder="enter dateofbirth"
        value={dateOfBirth}
        onChange={(e) =>
          dispatch({ type: "Change_dateOfBirth", payload: e.target.value })
        }
      />

      <br />
      <button
        disabled={!name && !age && !dateOfBirth}
        onClick={() => {
          navigate(`/registration/two`);
        }}
      >
        Next
      </button>
    </div>
  );
};
