import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import styles from "../css/Infos.module.css";
import Template from "../components/Template";
import InfoSkills from "../components/InfoSkills";
import { InfoProvider } from "../context/InfoContext";

function Skills() {
  return (
    <>
      <Navbar></Navbar>

      <div className={styles.mainPart}>
        <Menu></Menu>
        <InfoSkills></InfoSkills>
        <Template></Template>
      </div>
    </>
  );
}

export default Skills;
