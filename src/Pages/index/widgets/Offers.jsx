import styles from "./Offers.module.css";

const SALE = [
  {
    title: "Курица в кисло-сладком соусе",
    description: "Курица, перец, морковь, чеснок, яйцо, кунжут, томаты.",
    img: "/index/Offers/Picture.jpg",
    count: "-15%",
    price: "329р",
    id: 1,
  },
  {
    title: "Паста с грибами",
    description: "Паста, сливки, репчатый лук, шампиньоны, пармезан, масло.",
    img: "/index/Offers/Picture-1.jpg",
    count: "-10%",
    price: "350р",
    id: 2,
  },
  {
    title: "Салат “Цезарь”",
    description:
      "Зеленый салат, помидоры, курица, белый хлеб, соус, чеснок, пармезан.",
    img: "/index/Offers/Picture-2.jpg",
    count: "-10%",
    price: "179р",
    id: 3,
  },
  {
    title: "Карамельный торт с ягодами",
    description: "Мука, сахар, яйцо, сливки, клубника, желатин, ванилин.",
    img: "/index/Offers/Picture-3.jpg",
    count: "-5%",
    price: "180р",
    id: 4,
  },
];

export function Offers() {
  return (
    <>
      <div className={styles.offers}>
        <p className={styles.blockTitle}>Вкусные предложения</p>
        <div className={styles.container}>
          {SALE.map((sale) => (
            <div className={styles.card} key={sale.id}>
              <img className={styles.img} src={sale.img} />
              <div className={styles.content}>
                <div>
                  <p className={styles.title}>{sale.title}</p>
                  <p className={styles.description}>{sale.description}</p>
                </div>
                <div className={styles.priceContainer}>
                  <p className={styles.count}>{sale.count}</p>
                  <p className={styles.price}>{sale.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buttonArea}>
          <form action="/menu" className={styles.form}>
            <button className={styles.button}>Другие блюда</button>
          </form>
        </div>
      </div>
    </>
  );
}
