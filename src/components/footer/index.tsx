import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by Kenneth -{new Date().getFullYear()}
    </footer>
  );
}
