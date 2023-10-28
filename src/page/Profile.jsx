import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import styles from "../css/Infos.module.css";
import Template from "../components/Template";
import { InfoProvider } from "../context/InfoContext";
import ReactToPrint from "react-to-print";

function Profile() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.mainPart}>
        <Menu></Menu>
        <Info></Info>
        <Template></Template>
      </div>
      <div className={styles.footer}>
       <div className={styles.container}>
       <div className={styles.footerProfile}></div>
       </div>
      </div>
    </>
  );
}

export default Profile;
