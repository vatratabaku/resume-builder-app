import React, { createContext, useContext, useState } from "react";

const InfoContext = createContext();

function InfoProvider({ children }) {
  const [infos, setInfos] = useState({});
  const [formState, setFormState] = useState({});





  const updateInfos = (newInfo) => {
    setInfos(newInfo);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    updateInfos(formState);
  };


  return (
    <InfoContext.Provider
      value={{
        infos,
        setInfos,
        handleChange,
        handleClick,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}

export { InfoProvider, InfoContext };