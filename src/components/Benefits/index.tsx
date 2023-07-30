// Libraries
import React from "react";
// (end of) Libraries

// Images
import decorCar from "../../assets/img/decor/benefits-car.png";
// (end of) Images

// Styles
import styles from "./Benefits.module.scss";
// (end of) Styles

export const Benefits: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <img className={styles.decorCar} width="320" height="606" src={decorCar} alt="car" />

          <div className={styles.content}>
            <h2 className={`${styles.benefitsTitle} sectionTitle`}>Почему мы?</h2>

            <ul className={styles.benefitsList}>
              <li className={styles.item}>
                <p className={styles.itemNum}>650</p>
                <p className={styles.itemTitle}>Успешно доставленных авто</p>
                <p className={styles.itemText}>
                  Большой опыт пригона автомобилей из США под ключ, все клиенты остались довольны на
                  100%
                </p>
              </li>

              <li className={styles.item}>
                <p className={styles.itemNum}>5</p>
                <p className={styles.itemTitle}>Лет на рынке Украины</p>
                <p className={styles.itemText}>
                  Работаем по всей территории Украины, работаем по договору с клиентами
                </p>
              </li>

              <li className={styles.item}>
                <p className={styles.itemNum}>100 &#37;</p>
                <p className={styles.itemTitle}>Доверия клиентов</p>
                <p className={styles.itemText}>
                  Онлайн отчетность. Вы всегда в курсе статуса подбора вашего авто. Фото и видео
                  отчет
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
