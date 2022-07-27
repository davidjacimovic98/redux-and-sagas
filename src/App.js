import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main_div}>
      <UserList />
      <UserForm />
    </div>
  );
}

export default App;
