import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import InfoEducation from "../components/InfoEducation";
import Template from "../components/Template";
import styles from "../css/Infos.module.css";

function Education() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.mainPart}>
        <Menu></Menu>
        <InfoEducation></InfoEducation>
        <Template></Template>
      </div>
      <div className={styles.footer}>
       <div className={styles.container}>
       <div className={styles.footerEducation}></div>
       </div>
      </div>
    </>
  );
}

export default Education;
