import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>LSH's portfolio</h1>
      <div className={styles.index}>
        <a href="#">About</a>
        <a href="#">projects</a>
        <a href="#">contact</a>
      </div>
    </div>
  );
}
