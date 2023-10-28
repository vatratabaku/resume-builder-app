import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import InfoWork from "../components/InfoWork";
import Template from "../components/Template";
import styles from "../css/Infos.module.css";
import { InfoProvider } from "../context/InfoContext";

function Work() {
  return (
    <>
      <Navbar></Navbar>
      
        <div className={styles.mainPart}>
          <Menu></Menu>
          <InfoWork></InfoWork>
          <Template></Template>
        </div>
    </>
  );
}

export default Work;
