import { NavLink } from "react-router-dom";
import styles from "../css/Menu.module.css";
import { InfoContext } from "../context/InfoContext";
import { useContext } from "react";
import axios from "axios";

function Menu() {
     const { handleClick } = useContext(InfoContext);

 

  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <NavLink to="/">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
        <li>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <button onClick={handleClick} className={styles.btn}>Create</button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
