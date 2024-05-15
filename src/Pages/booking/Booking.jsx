import styles from "./Booking.module.css";
import { useState } from "react";
import { HeaderMain } from "../modules/HeaderMain";
import { DatePicker } from "../modules/Calendar/DatePicker";
import { Footer } from "../modules/Footer";
// import * as chechingFrom from "./chechFormBooking";

export function Booking() {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [formContent, setFormContent] = useState(() => [
    {
      name: null,
      surname: null,
      tel: null,
      emeil: null,
      numbOfPeople: null,
      comment: null,
      policy: null,
      time: null,
      date: null,
    },
  ]);

  async function formAction(formData) {
    //Заполняет объект данными
    setFormContent({
      name: formData.name,
      surname: formData.surname,
      tel: formData.tel,
      emeil: formData.email,
      numbOfPeople: formData.numbOfPeople,
      comment: formData.numbOfPeople,
      policy: formData.policy,
      time: formData.time,
      date: formData.date,
    });
    alert("Завершено!");
  }

  let dateValue =
    `${bookingDate.getDate()}` +
    "." +
    `${bookingDate.getMonth() + 1}` +
    "." +
    `${bookingDate.getFullYear()}`;

  return (
    <>
      <HeaderMain />
      <main>
        <p className={styles.pageTitle}>Бронирование</p>
        <article className={styles.booking}>
          <section className={styles.booking_form}>
            <form action={formAction} id="bookingForm">
              <section>
                <section>
                  {/* input name*/}
                  <label
                    htmlFor="name"
                    className={styles.booking_form_inputTitle}
                  >
                    Ваше имя
                  </label>
                  <input
                    autoComplete="off"
                    id="name"
                    className={styles.booking_form_input}
                    type="text"
                    required
                  />
                </section>
                <section>
                  {/* input surname*/}
                  <label
                    htmlFor="surname"
                    className={styles.booking_form_inputTitle}
                  >
                    Ваша фамилия
                  </label>
                  <input
                    autoComplete="off"
                    id="surname"
                    className={styles.booking_form_input}
                    type="text"
                    required
                  />
                </section>
                <section>
                  {/* input tel*/}
                  <label
                    htmlFor="tel"
                    className={styles.booking_form_inputTitle}
                  >
                    Ваш телефон
                  </label>
                  <input
                    autoComplete="off"
                    id="tel"
                    className={styles.booking_form_input}
                    type="tel"
                    pattern="\+?[0-9\s\-\(\)]+"
                    required
                  />
                </section>
                <section>
                  {/* input email*/}
                  <label
                    htmlFor="email"
                    className={styles.booking_form_inputTitle}
                  >
                    Ваш email
                  </label>
                  <input
                    autoComplete="off"
                    id="email"
                    className={styles.booking_form_input}
                    type="email"
                    required
                  />
                </section>
                <section>
                  {/* input numb of people*/}
                  <label
                    htmlFor="NumbOfPeople"
                    className={styles.booking_form_inputTitle}
                  >
                    Количество человек
                  </label>
                  <input
                    autoComplete="off"
                    id="NumbOfPeople"
                    className={styles.booking_form_input}
                    type="number"
                    min={1}
                    required
                  />
                </section>
                <section>
                  {/* input comment*/}
                  <label
                    htmlFor="comment"
                    className={styles.booking_form_inputTitle}
                  >
                    Комментарий
                  </label>
                  <input
                    autoComplete="off"
                    id="comment"
                    className={styles.booking_form_input}
                    type="text"
                  />
                </section>
                <section className={styles.booking_form_checkbox_policy}>
                  {/* input policy*/}
                  <input
                    autoComplete="off"
                    id="policy"
                    type="checkbox"
                    className={styles.booking_form_input}
                    required
                  />
                  <label htmlFor="policy">
                    Я ознакомлен (-а) с{" "}
                    <a
                      className={styles.booking_form_checkbox_policy_a}
                      href="/policy/PrivacyPolicy.pdf"
                      target="_bank"
                    >
                      политикой конфиденциальности и даю согласие на обработку
                      персональных данных.
                    </a>
                  </label>
                </section>
              </section>
              <section className={styles.rightGroup}>
                <section>
                  <section>
                    {/* input time*/}
                    <label
                      htmlFor="time"
                      className={styles.booking_form_inputTitle}
                    >
                      Время бронирования
                    </label>
                    <input
                      autoComplete="off"
                      id="time"
                      className={styles.booking_form_input}
                      type="time"
                      required
                    />
                  </section>
                  <section>
                    {/* input date*/}
                    <p className={styles.booking_form_inputTitle}>
                      Дата бронирования
                    </p>
                    <DatePicker setBookingDate={setBookingDate} />
                    <input
                      className={styles.booking_form_input_bookingDate}
                      type="hiden"
                      value={dateValue}
                      id="hiddenData"
                      readOnly
                    />
                  </section>
                </section>
                <section className={styles.booking_form_submitButton}>
                  <button
                    className={styles.booking_form_submitButton_but}
                    type="submit"
                  >
                    Забронировать столик
                  </button>
                </section>
              </section>
            </form>
          </section>
          <section className={styles.booking_wr}></section>
          <section className={styles.booking_tel}>
            <section className={styles.booking_tel_content}>
              <p>
                Или Вы можете забронировать столик позвонив по номеру телефона:
              </p>
              <p>+7 (000) 000-00-00</p>
            </section>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
