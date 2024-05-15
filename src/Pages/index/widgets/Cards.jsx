import styles from "./Cards.module.css";

const CARDS = [
  {
    lightHead: "Кофейные",
    head: "Напитки",
    img: "/index/Cards/ImgCard1.jpg",
    description: "Эспрессо, Американо, Латте, Капучино, Флэт уайт, Айс кофе",
    button: "Подробнее",
    id: "1",
  },
  {
    lightHead: "Питательные",
    head: "Завтраки",
    img: "/index/Cards/ImgCard2.jpg",
    description: "Сырники, Омлет, Блины, Панкейки, Сэндвичи, Каши",
    button: "Подробнее",
    id: "2",
  },
  {
    lightHead: "Первые и вторые",
    head: "Блюда",
    img: "/index/Cards/ImgCard3.jpg",
    description: "Супы, Паста, Стейки, Веганские блюда",
    button: "Подробнее",
    id: "3",
  },
  {
    lightHead: "Вкусные",
    head: "Десерты",
    img: "/index/Cards/ImgCard4.jpg",
    description: "Печенья, Пироженные, Торты, Эклеры, Мороженное",
    button: "Подробнее",
    id: "4",
  },
];

export function Cards() {
  return (
    <>
      <div className={styles.cardsArea}>
        {CARDS.map((card) => (
          <div key={card.id} className={styles.card}>
            <p className={styles.lightHead}>{card.lightHead}</p>
            <p className={styles.header}>{card.head}</p>
            <img className={styles.pic} src={card.img} />
            <p className={styles.description}>{card.description}</p>
            <form action="/menu" className={styles.form}>
              <button className={styles.button}>{card.button}</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
