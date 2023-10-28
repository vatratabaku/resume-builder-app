import styles from "../css/Infos.module.css";
import Button from "./Button";
import useSavedContext from "../hooks/useSavedContext";

function InfoSkills() {
  const { infos, handleChange } = useSavedContext();

  return (
    <div className={styles.infos}>
      <h4 className={styles.heading}>YOUR PERSONAL INFO</h4>
      <form className={styles.form}>
        <label>Section Heading</label>
        <input
          placeholder="Skills"
          className={styles.input}
          name="skillSection"
          type="text"
          onChange={handleChange}
        ></input>
        <label>Skill Name</label>
        <input
          placeholder="Skills name"
          className={styles.input}
          name="skillName"
          type="text"
          onChange={handleChange}
        ></input>
        <label>Skill Details</label>
        <input
          placeholder="Skill Details"
          className={styles.input}
          name="skillDetails"
          type="text"
          onChange={handleChange}
        ></input>
      </form>
      <div className={styles.buttons}>
        <Button content="Add Skill"></Button>
        <Button content="Remove Skill"></Button>
      </div>
    </div>
  );
}

export default InfoSkills;
