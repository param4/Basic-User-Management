import Card from "../UI/Card/Card";
import UserItem from "./UserItem/UserItem";
import styles from "./UserItem/UserItem.module.css";
const UserList = (props) => {
    if (props.userList.length === 0) {
        return <></>;
    }

    return (
        <Card>
            {props.userList.map((user) => (
                <UserItem key={user.id} className={styles["user-item"]}>
                    {user.username} ({user.age} years old)
                </UserItem>
            ))}
        </Card>
    );
};

export default UserList;
