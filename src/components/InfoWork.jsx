import styles from "../css/Infos.module.css"
import Button from "../components/Button";


import useSavedContext from "../hooks/useSavedContext";


function InfoWork() {
  const { infos, handleChange } = useSavedContext();


    return (       
        <div className={styles.infos}>
            <h4 className={styles.heading}>YOUR PERSONAL INFO</h4>
            <form className={styles.form}>
              <label>Section Heading</label>
              <input
                placeholder="Work Experience"
                className={styles.input}
                name="section"
                type="text"
                onChange={handleChange}
              ></input>
              <label>Company Name</label>
              <input
                placeholder="Google"
                className={styles.input}
                name="companyName"
                type="text"
                onChange={handleChange}
              ></input>
              <label>Job Location</label>
              <input
                placeholder="United States"
                className={styles.input}
                name="jobLocation"
                type="text"
                onChange={handleChange}
              ></input>
              <label>Job Title</label>
              <input
                placeholder="Software Engineer"
                className={styles.input}
                name="jobTitle"
                type="text"
                onChange={handleChange}
              ></input>
              <label>Job Responsibilities</label>
              <input
                placeholder="Cool stuffs at the company"
                className={styles.input}
                name="jobResponsibilities"
                type="text"
                onChange={handleChange}
              ></input>
              <label>Starting Date</label>
              <input
                placeholder="Sep 2015"
                className={styles.input}
                name="startDateJob"
                type="text"
                onChange={handleChange}
              ></input>
              <label>Ending Date</label>
              <input
                placeholder="Sep 2015"
                className={styles.input}
                name="endDateJob"
                type="text"
                onChange={handleChange}
              ></input>
            </form>  
            <div className={styles.buttons}>
             <Button content="Add Education"></Button>
             <Button content="Remove Education"></Button>
          </div>
          </div> );
}

export default InfoWork;