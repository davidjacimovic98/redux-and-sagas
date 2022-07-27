import React from "react";
import styles from "./TempUnitButtons.module.css";
import { useTempUnitContext } from "../../context/temp_unit_context";

const TempUnitButtons = () => {
  const { setUnit } = useTempUnitContext();

  const tempInCelsius = () => {
    setUnit("celsius");
  };
  const tempInFarenheit = () => {
    setUnit("farenheit");
  };
  const tempInKelvin = () => {
    setUnit("kelvin");
  };

  return (
    <div className={styles.temp_btns}>
      Show current temperature in degree:
      <div>
        <button className={styles.btn_toggle_unit} onClick={tempInCelsius}>
          Celsius
        </button>
        <button className={styles.btn_toggle_unit} onClick={tempInFarenheit}>
          Farenheit
        </button>
        <button className={styles.btn_toggle_unit} onClick={tempInKelvin}>
          Kelvin
        </button>
      </div>
    </div>
  );
};

export default TempUnitButtons;
