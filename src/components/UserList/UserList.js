import React from "react";
import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";
import styles from "./UserList.module.css";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const cities = useSelector((state) => state.weather);
  if (users.length > 0) {
    return (
      <div>
        <div className={styles.user_list}>
          {users.map((user) => (
            <UserCard key={user.id} {...user} city={cities[user.city]} />
          ))}
        </div>
      </div>
    );
  } else {
    return <p>No users added!</p>;
  }
};

export default UserList;
