import styles from "./Contacts.module.css";
import { HeaderMain } from "../modules/HeaderMain";
import { Footer } from "../modules/Footer";

const CONTACTS = [
  {
    type: "Телефон",
    value: "+7 (000) 000-00-00",
  },
  {
    type: "Почта",
    value: "abit@omsu.ru",
  },
  {
    type: "Адрес",
    value: "г. Омск, ул. 10 лет Октября, 195/18",
  },
];

export function Contacts() {
  return (
    <>
      <HeaderMain />
      <main>
        <p className={styles.pageTitle}>Наши контакты</p>
        <section className={styles.frame}>
          <article className={styles.contacts}>
            <section className={styles.contacts_content}>
              {CONTACTS.map((contact) => (
                <section
                  className={styles.contacts_content_element}
                  key={contact.type}
                >
                  <p className={styles.contacts_content_element_type}>
                    {contact.type}
                  </p>
                  <p className={styles.contacts_content_element_value}>
                    {contact.value}
                  </p>
                </section>
              ))}
              <section className={styles.contacts_content_element}>
                <p className={styles.contacts_content_element_type}>
                  Социальные сети
                </p>
                <section className={styles.contacts_content_element_socials}>
                  <a href="https://vk.com/">
                    <img src="/contacts/vk.svg" alt="VK" />
                  </a>
                  <a href="https://telegram.org/">
                    <img src="/contacts/tg.svg" alt="Telegram" />
                  </a>
                  <a href="https://www.whatsapp.com/">
                    <img src="/contacts/wa.svg" alt="WhatsApp" />
                  </a>
                  <a href="http://www.instagram.com/">
                    <img src="/contacts/inst.svg" alt="Instagram" />
                  </a>
                  <a href="https://www.tiktok.com/@omsu.ru">
                    <img src="/contacts/tt.svg" alt="TikTok" />
                  </a>
                </section>
              </section>
              <section className={styles.contacts_content_element}>
                <p className={styles.contacts_content_element_type}>
                  График работы
                </p>
                <p className={styles.contacts_content_element_value}>
                  Пн-Пт: с 10:00 до 22:00
                </p>
                <p className={styles.contacts_content_element_value}>
                  Сб-Вс: с 8:00 до 23:00
                </p>
              </section>
            </section>
          </article>
          <article className={styles.contacts_map}>
            <p className={styles.contacts_content_element_value}>Мы на карте</p>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=73.436376%2C54.988371&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzE0NDUwORJD0KDQvtGB0YHQuNGPLCDQntC80YHQuiwg0YPQu9C40YbQsCAxMCDQu9C10YIg0J7QutGC0Y_QsdGA0Y8sIDE5NS8xOCIKDW3fkkIVF_RbQg%2C%2C&z=15"
              allowfullscreen="true"
            ></iframe>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
