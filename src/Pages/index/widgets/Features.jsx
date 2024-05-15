import style from "./Features.module.css";

export function Featuares() {
  return (
    <>
      <div className={style.area}>
        <p className={style.groupTitle}>Особенности нашего ресторана</p>
        <div className={style.container}>
          <div className={style.leftGroup}>
            <p className={style.title}>Приятное утро</p>
            <p className={style.description}>
              Каждое утро с 8:00 до 11:00 Ваш любимый кофе и завтрак со скидкой
              10%
            </p>
            <img className={style.img} src="index/Features/coffee1.jpg" />
          </div>
          <div className={style.rightGroup}>
            <p className={style.title}>Именинникам скидка </p>
            <p className={style.description}>
              20% скидка на весь ассортимент в День Рождения!
            </p>
            <img
              className={style.img}
              src="index/Features/kittenHappyBirthday2.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
