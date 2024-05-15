import styles from "./AboutUs.module.css";
import { HeaderMain } from "../modules/HeaderMain";
import { Footer } from "../modules/Footer";

const TEAM = [
  {
    id: "1",
    img: "/aboutUs/Team/Chief.jpg",
    name: "Александр Иванов",
    role: "Шеф-повар",
  },
  {
    id: "2",
    img: "/aboutUs/Team/SousСhief.jpg",
    name: "Дмитрий Соколов",
    role: "Су-шеф",
  },
  {
    id: "3",
    img: "/aboutUs/Team/Waiter.jpg",
    name: "Максим Лебедев",
    role: "Официант",
  },
  {
    id: "4",
    img: "/aboutUs/Team/Waiter2.jpg",
    name: "Анастасия Кузнецова",
    role: "Официант",
  },
  {
    id: "5",
    img: "/aboutUs/Team/Barman.jpg",
    name: "Мария Николаева",
    role: "Бармен",
  },
];

export function AboutUs() {
  return (
    <>
      <HeaderMain />
      <main>
        <article className={styles.about_content}>
          <p className={styles.pageTitle}>О нас</p>
          <section className={styles.about_content_textarea}>
            <picture>
              <img src="/aboutUs/rectImg.jpg" />
            </picture>
            <section className={styles.about_content_textarea_rightGroup}>
              <p>
                Добро пожаловать в «The Taste», где каждый найдет что-то по
                своему вкусу! Наше меню предлагает широкий выбор блюд, от
                классических до экзотических, призванных удовлетворить любой
                вкус. Наши повара уделяют особое внимание использованию только
                свежих ингредиентов в каждом блюде, обеспечивая высочайшее
                качество и неповторимый вкус.
              </p>
              <section
                className={styles.about_content_textarea_rightGroup_team}
              >
                <p
                  className={
                    styles.about_content_textarea_rightGroup_team_groupTitle
                  }
                >
                  Наша команда
                </p>
                <section
                  className={
                    styles.about_content_textarea_rightGroup_team_block
                  }
                >
                  {TEAM.map((employee) => (
                    <section
                      className={
                        styles.about_content_textarea_rightGroup_team_employee
                      }
                      key={employee.id}
                    >
                      <img src={employee.img} />
                      <p>{employee.name}</p>
                      <p>{employee.role}</p>
                    </section>
                  ))}
                </section>
              </section>
            </section>
          </section>
          <section className={styles.about_content_history}>
            <section className={styles.about_content_history_textarea}>
              <p>История нашего ресторана</p>
              <p>
                Ресторан &quot;The Taste&quot; был основан в Омске в 2010 году,
                когда его основатели решили создать место, где каждый может
                найти что-то для себя. Наша команда профессионалов усердно
                трудилась над тем, чтобы обеспечить исключительный уровень
                обслуживания и создать удивительный мир вкусов для наших
                клиентов. В 2015 году мы получили награду &quot;Рекомендуемый
                ресторан&quot; от туристической организации Омска за наши усилия
                в создании уникального и приятного опыта для наших клиентов.
                <br />
                <br />В настоящее время ресторан &quot;The Taste&quot; в Омске
                продолжает радовать своих гостей широким выбором
                высококачественных блюд русской и европейской кухни. Современный
                и стильный интерьер, в сочетании с внимательным обслуживанием,
                создают уютную и приятную атмосферу для посетителей.
              </p>
            </section>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
