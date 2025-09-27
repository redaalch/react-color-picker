import styles from "./Button.module.css";

function Button() {
  let count = 0;
  const handleCLick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clocked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me b`);
    }
  };

  return (
    <button className={styles.button} onClick={() => handleCLick("reda")}>
      Click me
    </button>
  );
}
export default Button;
