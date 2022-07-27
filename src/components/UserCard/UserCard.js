import React from "react";
import { useTempUnitContext } from "../../context/temp_unit_context";
import styles from "./UserCard.module.css";

const UserCard = ({ city, firstName, lastName }) => {
  const { celsius } = useTempUnitContext();

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
            {celsius
              ? temp.toFixed(1) + "℃"
              : (temp * 1.8 + 32).toFixed(1) + "℉"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
