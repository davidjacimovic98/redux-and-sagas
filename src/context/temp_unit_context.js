import React, { useContext, useState } from "react";

const TempUnitContext = React.createContext();

export const TempUnitProvider = ({ children }) => {
  const [celsius, setCelsius] = useState(true);
  return (
    <TempUnitContext.Provider value={{ celsius, setCelsius }}>
      {children}
    </TempUnitContext.Provider>
  );
};

export const useTempUnitContext = () => {
  return useContext(TempUnitContext);
};
