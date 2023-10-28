import styles from "../css/Template.module.css";
import { InfoContext } from "../context/InfoContext";
import { useContext, useRef } from "react";
import ReactToPrint from "react-to-print";
import printer from "../components/img/computer-printer (1).png";

function Template() {
  const { infos } = useContext(InfoContext);
  const componentRef = useRef();

  return (
    <>
      <div className={styles.template}>
        <div className={styles.header}>
          <ReactToPrint
            trigger={() => (
              <button className={styles.button}>
                <img src={printer} alt="" />
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>

        <div ref={componentRef} className={styles.resume}>
          <h2 className={styles.fullName}> {infos.nameValue}</h2>
          <h4 className={styles.currentJobTitle}>{infos.currentJobTitle}</h4>
          <div className={styles.personalDetails}>
            <p>{infos.email && `📧 ${infos.email}`}</p>
            <p>{infos.location && `📍 ${infos.location}`}</p>
            <p>{infos.number && ` 📞 ${infos.number}`}</p>
            <a href={infos.link}>{infos.link && `🔗 Link`}</a>
          </div>

          <div className={styles.firstRow}>
            <div className={infos.educationSection}>
              <h3>{infos.education}</h3>
              <div className={styles.edu}>
                <h4>
                  {infos.degree} {infos.major}
                </h4>
                <h4>{infos.schoolLocation && `"${infos.schoolName}" - ${infos.schoolLocation}`}</h4>
                <p>
                  {infos.startDate && `${infos.startDate} - ${infos.endDate}`}
                </p>
              </div>
            </div>

            <div className={styles.workSection}>
              <h3>{infos.section}</h3>
              <div className={styles.workDetails}>
                <div> 
                  <h4>{infos.jobTitle}</h4>
                  <h5>{infos.companyName}</h5>
                  <p className={styles.dates}>
                    {infos.startDateJob &&
                      `${infos.startDateJob} - ${infos.endDateJob} `}
                  </p>
                 
                  <p>{infos.jobResponsibilities}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4>{infos.skillSection}</h4>
            <div>
              <h4>{infos.skillName}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template;
