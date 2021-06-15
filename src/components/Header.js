import React, {useState} from "react";
import styles from './Header.module.css';

const Header = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const LogInHandler = () => {
        setIsLoggedIn(true);
    };

    return (
    <header className={styles.header}>
    <h2>NavBar</h2>
    <button className={styles.profilebtn} onClick={props.onHome}><b>Home</b></button>
    {isLoggedIn && <button className={styles.profilebtn} onClick={props.onProfile}><b>Profile</b></button>}
    {!isLoggedIn && <button className={styles.loginbtn} onClick={LogInHandler}><b>Login</b></button>}
    </header>
    );
};


export default Header;