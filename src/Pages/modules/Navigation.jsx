import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <>
      <nav className={styles.header}>
        <a href="/" className={styles.navbarBrand}>
          <img
            src="index/bg_borderNormalTextWhiteРесурс 8.svg"
            width={195.1}
            height={91.9}
          ></img>
        </a>
        <div className={styles.navbar}>
          <a href="/">Главная</a>
          <a href="/menu">Меню</a>
          <a href="/stocks">Акции</a>
          <a href="/aboutUs">О нас</a>
          <a href="/contacts">Контакты</a>
          <a href="/booking">Бронирование</a>
        </div>
      </nav>
    </>
  );
}
