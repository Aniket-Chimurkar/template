import React from "react";
export const RegistrationContext = React.createContext();

const initialstate = {
  name: "",
  age: "",
  dateOfBirth: "",
  stateofr: "",
  address: "",
  pincode: ""
};

function reducer(state, action){
  switch (action.type) {
    case "Change_Name":
      return { ...state, name: action.payload };
    case "Change_Age":
      return { ...state, age: action.payload };
    case "Change_dateOfBirth":
      return { ...state, dateOfBirth: action.payload };
    case "Change_stateofr":
      return { ...state, stateofr: action.payload };
    case "Change_address":
      return { ...state, address: action.payload };
    case "Change_pincode":
      return { ...state, pincode: action.payload };
    default:
      throw new Error();
  }
};

export function RegistrationContextProvider({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialstate);

  const handleSubmit = () => {
    fetch(`http://localhost:8080/users`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  const { name, age, dateOfBirth, stateofr, address, pincode } = state;
  return (
    <RegistrationContext.Provider
      value={{
        name,
        age,
        dateOfBirth,
        stateofr,
        address,
        pincode,
        dispatch,
        handleSubmit,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
