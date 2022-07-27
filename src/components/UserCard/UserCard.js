import React from "react";
import { useTempUnitContext } from "../../context/temp_unit_context";
import styles from "./UserCard.module.css";

const UserCard = ({ city, firstName, lastName }) => {
  const { unit, isCelsius, isFarenheit, isKelvin } = useTempUnitContext();

  if (!city) {
    return <p>Loading...</p>;
  }

  const {
    name,
    main: { temp },
  } = city;

  return (
    <div className={styles.city_card_container}>
      <div className={styles.first_row}>
        {firstName} {lastName}
        <div className={styles.second_row}>
          <p>{name}</p>
          <span>
            {isCelsius && temp.toFixed(1) + "℃"}
            {isFarenheit && (temp * 1.8 + 32).toFixed(1) + "℉"}
            {isKelvin && (temp + 273.15).toFixed(1) + "K"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
