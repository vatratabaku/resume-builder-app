import styles from "../css/Button.module.css";


function Button(props) {
  const { content, action } = props;

  return (
    <>
    <button onClick={action} className={styles.btn}>
      {content}
    </button>
    </>
  );
}

export default Button;
