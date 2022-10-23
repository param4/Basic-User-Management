import { useState } from "react";
import styles from "./App.module.css";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";
function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = (newUserData)=> {
        setUsers(prevState => {
            return [newUserData, ...prevState];
        })
    }

    return (
        <div className={styles.container}>
            <NewUser onAddNewUser={addUserHandler} />
            <UserList userList={users} />
        </div>
    );
}

export default App;
