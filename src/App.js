import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import styles from "./App.module.css";
import TempUnitButtons from "./components/TempUnitButtons/TempUnitButtons";

function App() {
  return (
    <div className={styles.main_div}>
      <TempUnitButtons />
      <UserList />
      <UserForm />
    </div>
  );
}

export default App;
