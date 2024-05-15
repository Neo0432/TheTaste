import styles from "./Stocks.module.css";
import { HeaderMain } from "../modules/HeaderMain";
import { Footer } from "../modules/Footer";

const STOCKS = [
  {
    id: "1",
    title: "Приятное утро",
    img: "/stocks/coffee_1.jpg",
    description:
      "Каждое утро с 8:00 до 11:00 любимый кофе и завтрак со скидкой 10%",
  },
  {
    id: "2",
    title: "Именинникам скидка",
    img: "/stocks/kittenHappyBirthday.jpg",
    description: "20% скидка на весь ассортимент в День Рождения!",
  },
];

export function Stocks() {
  return (
    <>
      <HeaderMain />
      <main>
        <article className={styles.stocks_content}>
          <p className={styles.pageTitle}>Акции</p>
          <section className={styles.stocks_content_cards}>
            {STOCKS.map((el) => (
              <section className={styles.el} key={el.id}>
                <p className={styles.elTitle}>{el.title}</p>
                <img className={styles.elImg} src={el.img} />
                <p className={styles.elDescription}>{el.description}</p>
              </section>
            ))}
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
