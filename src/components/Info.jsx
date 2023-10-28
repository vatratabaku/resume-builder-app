import { useContext, useState } from "react";
import styles from "../css/Infos.module.css";
import Button from "./Button";
import useSavedContext from "../hooks/useSavedContext";

function Info() {
  const { infos, handleChange } = useSavedContext();

  return (
    <div className={styles.infos}>
      <h4 className={styles.heading}>YOUR PERSONAL INFO</h4>
      <form className={styles.form}>
        <label>Full Name</label>
        <input
          placeholder="John Doe"
          className={styles.input}
          type="text"
          value={infos.nameValue}
          onChange={handleChange}
          name="nameValue"
        ></input>
            <label>Job Title</label>
        <input
          placeholder="Web Developer"
          className={styles.input}
          type="text"
          value={infos.currentJobTitle}
          onChange={handleChange}
          name="currentJobTitle"
        ></input>
        <label>Email</label>
        <input
          placeholder="johndoe@example.com"
          className={styles.input}
          value={infos.email}
          type="email"
          name="email"
          onChange={handleChange}
        ></input>
        <label>Phone Number</label>
        <input
          placeholder="(555) 135 4675 847"
          className={styles.input}
          value={infos.phoneNumber}
          type="text"
          name="number"
          onChange={handleChange}
        ></input>
        <label>Location</label>
        <input
          placeholder="Pristina"
          className={styles.input}
          value={infos.location}
          type="text"
          name="location"
          onChange={handleChange}
        ></input>
          <label>Link</label>
        <input
          placeholder="mylinkedinaccount.com"
          className={styles.input}
          value={infos.link}
          type="text"
          name="link"
          onChange={handleChange}
        ></input>
      </form>

    </div>
  );
}

export default Info;
