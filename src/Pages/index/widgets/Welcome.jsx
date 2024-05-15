import styles from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <div className={styles.area}>
        <div className={styles.text}>
          <p>Вкусный ужин</p>
          <p>
            Вы можете заказать ужин в нашем ресторане на сумму от 400 рублей
          </p>
        </div>
        <form action="/booking">
          <button className={styles.button}>Забронировать столик</button>
        </form>
      </div>
    </>
  );
}
