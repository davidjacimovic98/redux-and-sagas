import React from "react";
import styles from "./TempUnitButtons.module.css";
import { useTempUnitContext } from "../../context/temp_unit_context";

const TempUnitButtons = () => {
  const { setCelsius } = useTempUnitContext();

  const tempInCelsius = () => {
    setCelsius(true);
  };
  const tempInFarenheit = () => {
    setCelsius(false);
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
      </div>
    </div>
  );
};

export default TempUnitButtons;
