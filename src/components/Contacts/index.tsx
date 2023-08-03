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
    <section className={`contacts ${styles.root}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <h2 className="sectionTitle">Контакты</h2>

            <ul className={styles.contactsList}>
              <li className={styles.item}>
                <p className={styles.itemTitle}>Адрес</p>

                <p className={styles.itemText}>
                  Киев, Подол
                  <br />
                  ул. Константиновская, д.71
                </p>
              </li>

              <li className={styles.item}>
                <p className={styles.itemTitle}>Время работы</p>

                <p className={styles.itemText}>
                  Пн-Сб: с 9:00 до 19:00,
                  <br />
                  Вс: выходной
                </p>
              </li>

              <li className={styles.item}>
                <p className={styles.itemTitle}>Телефон</p>

                <p className={styles.itemText}>+38 (050) 555-66-77</p>
              </li>
            </ul>
          </div>

          <form className={styles.contactsForm}>
            <h2 className={`${styles.title} sectionTitle sectionTitleOnDarkBG`}>Оставить заявку</h2>

            <div className={styles.inputs}>
              <input className={styles.input} placeholder="Как Вас зовут?" type="text" />

              <input className={styles.input} placeholder="Ваш номер телефона" type="tel" />
            </div>

            <ButtonBlockBtn
              className={""}
              link={""}
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
