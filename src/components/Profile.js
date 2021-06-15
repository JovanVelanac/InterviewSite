import React, {useState} from "react";
import styles from './Profile.module.css';

const Profile = () => {
    const [randNum, setRandNum] = useState(1);

    const changeRandNum = () => {
        let num = Math.random()*1000;
        setRandNum(num);
    };
    
    return (
        <div className={styles.profile}>
            <img src={`https://api.hello-avatar.com/adorables/285/${randNum}`} alt='User Avatar'/>
            <label><b>Weird Face Man</b></label>
            <p>Weirdfaceman@zoo.com</p>
            <button className={styles.avatarbtn} onClick={changeRandNum}>Toggle avatar</button>

        </div>
    );
};

export default Profile;