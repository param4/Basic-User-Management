import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./NewUser.module.css";
import Modal from "../UI/Modal/Modal";
import { useState } from "react";

const NewUser= (props)=> {
    const defaultUserInput = {
        username: "", 
        age: ""
    }

    const defaultError = {
        title: "", 
        message: "",
        isVisible: 0
    }
    
    const [error, setError] = useState(defaultError);

    const [userInput, setUserInput] = useState(defaultUserInput);
    const submitFormHandler = (event)=> {
        event.preventDefault();
        userInput.age = +userInput.age;
        if (userInput.age < 0) {
            setError({
                title : "Invalid Age",
                message: "Age Can not be negative",
                isVisible: 1
            });
            return;
        }
        props.onAddNewUser({
            id: new Date().getTime().toString(),
            ...userInput,
        });
        setUserInput(defaultUserInput);
    }
    
    const usernameChangeHandler = (event)=> {
        setUserInput(prevState=>{
            return {
                ...prevState,
                username: event.target.value
            }
        })
    }
    
    const ageChangeHandler = (event)=> {
        setUserInput(prevState=>{
            return {
                ...prevState,
                age: event.target.value
            }
        })
    }

    const closeModalHandler = () =>{
        setError(defaultError);
    }

    return (
        <Card>
            <form onSubmit={submitFormHandler}>
                <div className={styles.input}>
                    <label>Username</label>
                    <input type="text" value={userInput.username} onChange={usernameChangeHandler} required />
                </div>
                <div className={styles.input}>
                    <label>Age (Years)</label>
                    <input type="number" value={userInput.age} onChange={ageChangeHandler} required/>
                </div>
                <Button type="submit" >Add User</Button>
            </form>
            {error.isVisible ? <Modal title={error.title} message={error.message} onClose={closeModalHandler}/>  : ""}
        </Card>
    );
}
export default NewUser;