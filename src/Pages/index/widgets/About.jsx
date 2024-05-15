import styles from "./About.module.css";

export function About() {
  return (
    <>
      <div className={styles.aboutArea}>
        <div className={styles.area}>
          <p className={styles.smallText}>Немного о нас</p>
          <p className={styles.title}>Уютный ресторан в Омске</p>
          <p className={styles.content}>
            “The Taste” - это место, где каждый найдет что-то для себя. У нас
            есть широкий выбор блюд, от классических до экзотических, которые
            удовлетворят любой вкус. Наши повара используют только свежие
            ингредиенты, чтобы гарантировать качество и вкус каждого блюда. Мы
            также предлагаем обширную карту вин, чтобы дополнить ваш ужин.
            Приходите и откройте для себя удивительный мир вкусов в “The Taste”!
          </p>
          <form action="/booking" className={styles.form}>
            <button className={styles.button}>Забронировать столик</button>
          </form>
        </div>
      </div>
    </>
  );
}
