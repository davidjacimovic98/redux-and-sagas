import React, { useContext, useState } from "react";

const TempUnitContext = React.createContext();

export const TempUnitProvider = ({ children }) => {
  const [unit, setUnit] = useState("celsius");
  const isCelsius = unit === "celsius";
  const isFarenheit = unit === "farenheit";
  const isKelvin = unit === "kelvin";
  return (
    <TempUnitContext.Provider
      value={{ unit, setUnit, isCelsius, isFarenheit, isKelvin }}
    >
      {children}
    </TempUnitContext.Provider>
  );
};

export const useTempUnitContext = () => {
  return useContext(TempUnitContext);
};
