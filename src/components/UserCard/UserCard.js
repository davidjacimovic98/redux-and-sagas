import React from "react";
import styles from "./UserCard.module.css";

const UserCard = ({ city, celsius, firstName, lastName }) => {
  console.log(city);

  if (!city) {
    return <p>Loading...</p>;
  }

  const {
    name,
    main: { temp },
  } = city;

  if (celsius === true) {
    return (
      <div className={styles.city_card_container}>
        <div className={styles.first_row}>
          {firstName} {lastName}
          <div className={styles.second_row}>
            <p>{name}</p>
            {temp.toFixed(1)}℃
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.city_card_container}>
        <div className={styles.first_row}>
          {firstName} {lastName}
          <div className={styles.second_row}>
            <p>{name}</p>
            {(temp * 1.8 + 32).toFixed(1)}℉
          </div>
        </div>
      </div>
    );
  }
};

export default UserCard;
