import styles from "./HeaderMain.module.css";
import { Navigation } from "./Navigation";

export function HeaderMain() {
  return (
    <>
      {(window.location.pathname == "/") ? (
          <header>
            <img className={styles.bgImg} src="/BgHeaderMain.jpg" />
            <Navigation />
            </header>
        ):
        (
            <header className={styles.headerOth}>
                <img className={styles.bgImgOth} src="/BgHeaderOthers.svg" />
                <Navigation />
            </header>
        )}
    </>
    );
}
