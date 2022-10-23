import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./NewUser.module.css";
import Modal from "../UI/Modal/Modal";
import { useRef, useState } from "react";

const NewUser = (props) => {
    const usernameRef = useRef();
    const ageRef = useRef();

    const defaultError = {
        title: "",
        message: "",
        isVisible: 0,
    };

    const [error, setError] = useState(defaultError);

    const submitFormHandler = (event) => {
        event.preventDefault();
        if (+ageRef.current.value < 0) {
            setError({
                title: "Invalid Age",
                message: "Age Can not be negative",
                isVisible: 1,
            });
            return;
        }
        props.onAddNewUser({
            id: new Date().getTime().toString(),
            username: usernameRef.current.value,
            age: +ageRef.current.value
        });
        usernameRef.current.value = "";
        ageRef.current.value = "";
    };

    const closeModalHandler = () => {
        setError(defaultError);
    };

    return (
        <Card>
            <form onSubmit={submitFormHandler}>
                <div className={styles.input}>
                    <label>Username</label>
                    <input
                        type="text"
                        ref={usernameRef}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <label>Age (Years)</label>
                    <input
                        type="number"
                        ref={ageRef}
                        required
                    />
                </div>
                <Button type="submit">Add User</Button>
            </form>
            {error.isVisible ? (
                <Modal
                    title={error.title}
                    message={error.message}
                    onClose={closeModalHandler}
                />
            ) : (
                ""
            )}
        </Card>
    );
};
export default NewUser;
