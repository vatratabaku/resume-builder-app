import { useContext, useState } from "react";
import styles from "../css/Infos.module.css";
import Button from "./Button";
import useSavedContext from "../hooks/useSavedContext";

function InfoEducation() {
  const { infos, handleChange } = useSavedContext();


  return (
    <>
      <div className={styles.infos}>
        <h4 className={styles.heading}>YOUR PERSONAL INFO</h4>
        <form className={styles.form}>
          <label>Section Heading</label>
          <input
            placeholder="Education"
            className={styles.input}
            name="education"
            type="text"
            onChange={handleChange}
          ></input>
          <label>School/University Name</label>
          <input
            placeholder="Harvard"
            className={styles.input}
            name="schoolName"
            type="text"
            onChange={handleChange}
          ></input>
          <label>Location</label>
          <input
            placeholder="United States"
            className={styles.input}
            name="schoolLocation"
            type="text"
            onChange={handleChange}
          ></input>
          <label>Degree</label>
          <input
            placeholder="BS"
            className={styles.input}
            name="degree"
            type="text"
            onChange={handleChange}
          ></input>
          <label>Major</label>
          <input
            placeholder="Computer Science"
            className={styles.input}
            name="major"
            type="text"
            onChange={handleChange}
          ></input>
          <label>Starting Date</label>
          <input
            placeholder="Sep 2015"
            className={styles.input}
            name="startDate"
            type="text"
            onChange={handleChange}
          ></input>
          <label>Ending Date</label>
          <input
            placeholder="Sep 2015"
            className={styles.input}
            name="endDate"
            type="text"
            onChange={handleChange}
          ></input>
        </form>  
        <div className={styles.buttons}>
         <Button content="Add Education"></Button>
         <Button content="Remove Education"></Button>
      </div>
      </div>
    
    </>
  );
}

export default InfoEducation;
