import React from "react";

export const RegistrationContext = React.createContext();

const initialstate = {
  country: "",
  city: "",
  population: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "Change_Country":
      return { ...state, country: action.payload };
    case "Change_City":
      return { ...state, city: action.payload };
    case "Change_Population":
      return { ...state, population: action.payload };
    default:
      throw new Error();
  }
}

export function RegistrationContextProvider({ children }) {
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

  const { country, city, population } = state;
  return (
    <RegistrationContext.Provider
      value={{
        country,
        city,
        population,
        dispatch,
        handleSubmit,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
