import { Booking } from "../booking/Booking";
import styles from "./Footer.module.css";

const CARDS = [
  {
    ico: "../index/Footer/Icons/pin_927667_white 1.svg",
    key: "Мы находимся по адресу:",
    value: "г. Омск, ул. 10 лет Октября, 195/18",
    id: 1,
  },
  {
    ico: "../index/Footer/Icons/mail_665072_white 1.svg",
    key: "Электронная почта:",
    value: "abit@omsu.ru",
    id: 2,
  },
  {
    ico: "../index/Footer/Icons/telephone_126523_white 2.svg",
    key: "Звоните по телефону:",
    value: "+7 (000) 000-00-00",
    id: 3,
  },
];

const TIMETABLE = [
  {
    day: "Понедельник",
    time: "9:00 - 22:00",
  },
  {
    day: "Вторник",
    time: "9:00 - 22:00",
  },
  {
    day: "Среда",
    time: "9:00 - 22:00",
  },
  {
    day: "Четверг",
    time: "9:00 - 22:00",
  },
  {
    day: "Пятница",
    time: "9:00 - 22:00",
  },
  {
    day: "Суббота",
    time: "9:00 - 22:00",
  },
  {
    day: "Воскресенье",
    time: "9:00 - 22:00",
  },
];

export function Footer() {
  return (
    <footer>
      <img
        className={styles.backgroundImg}
        src="../index/Footer/BG_footer.jpg"
      />
      <div className={styles.footerContainer}>
        <div className={styles.leftContent}>
          <p className={styles.Title}>Наши контакты</p>
          <div className={styles.cardsArea}>
            {CARDS.map((card) => (
              <div className={styles.card} key={card.id}>
                <img className={styles.ico} src={card.ico} />
                <div className={styles.cardTextArea}>
                  <p className={styles.key}>{card.key}</p>
                  <p className={styles.value}>{card.value}</p>
                </div>
              </div>
            ))}
            <div className={styles.socialCard}>
              <p>Мы в социальных сетях:</p>
              <div className={styles.icons}>
                <a href="#">
                  <img
                    className={styles.socialIco}
                    src="../index/Footer/Icons/socials/Vector-3_vk.svg"
                  />
                </a>
                <a href="#">
                  <img
                    className={styles.socialIco}
                    src="../index/Footer/Icons/socials/Vector-2_tg.svg"
                  />
                </a>
                <a href="#">
                  <img
                    className={styles.socialIco}
                    src="../index/Footer/Icons/socials/Vector-1_whatsUp.svg"
                  />
                </a>
                <a href="#">
                  <img
                    className={styles.socialIco}
                    src="../index/Footer/Icons/socials/Social Icons_inst.svg"
                  />
                </a>
                <a href="#">
                  <img
                    className={styles.socialIco}
                    src="../index/Footer/Icons/socials/Vector_tictok.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.Map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?display-text=%D0%9E%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%20%D0%B8%D0%BC.%20%D0%A4.%D0%9C.%20%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE&ll=73.414737%2C55.013430&mode=search&oid=238636964198&ol=biz&sll=73.368212%2C54.989342&sspn=0.722351%2C0.278745&text=%7B%22text%22%3A%22%D0%9E%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%20%D0%B8%D0%BC.%20%D0%A4.%D0%9C.%20%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%22805578262%22%5D%7D%5D%7D&z=12"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.Timetable}>
            <p className={styles.TimetableHeader}>График работы</p>
            <div className={styles.TimetableDayTime}>
              <div className={styles.TimetableDay}>
                {TIMETABLE.map((day) => (
                  <p key={day.day}>{day.day}</p>
                ))}
              </div>
              <div className={styles.TimetableTime}>
                {TIMETABLE.map((time) => (
                  <p key={time.day}>{time.time}</p>
                ))}
              </div>
            </div>
          </div>
          <form action="/booking">
            <button className={styles.button}>Забронировать столик</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
