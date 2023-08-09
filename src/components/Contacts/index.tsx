// Libraries
import React from "react";
// (end of) Libraries

// Blocks
import { ButtonBlockBtn } from "../../blocks/ButtonBlock/ButtonBlockBtn";
// (end of) Blocks

// Styles
import styles from "./Contacts.module.scss";
// (end of) Styles

export const Contacts: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <h2 className="sectionTitle">Контакты</h2>

            <ul className={styles.contactsList}>
              <li className={styles.item}>
                <p className={styles.title}>Адрес</p>

                <p className={styles.text}>
                  Киев, Подол
                  <br />
                  ул. Константиновская, д.71
                </p>
              </li>

              <li className={styles.item}>
                <p className={styles.title}>Время работы</p>

                <p className={styles.text}>
                  Пн-Сб: с 9:00 до 19:00,
                  <br />
                  Вс: выходной
                </p>
              </li>

              <li className={styles.item}>
                <p className={styles.title}>Телефон</p>

                <p className={styles.text}>
                  <a className={styles.phone} href="tel:+380505556677" title="Позвонить">
                    +38 (050) 555 66 77
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <form className={styles.contactsForm}>
            <h2 className="sectionTitle">Оставить заявку</h2>

            <div className={styles.inputs}>
              <input className={styles.input} placeholder="Как Вас зовут?" type="text" />

              <input className={styles.input} placeholder="Ваш номер телефона" type="tel" />
            </div>

            <ButtonBlockBtn
              className=""
              link=""
              text="Отправить заявку"
              title="Отправить заявку"
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};
