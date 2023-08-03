// Libraries
import React from "react";
// (end of) Libraries

// Blocks
import { ButtonBlockLink } from "../../blocks/ButtonBlock/ButtonBlockLink";
// (end of) Blocks

// Styles
import styles from "./Services.module.scss";
// (end of) Styles

export const Services: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className="sectionTitle">Наши услуги</h2>

        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.contentBox}>
              <h3 className="contentTitle">Почему ввоз авто из США?</h3>

              <div className={styles.textBox}>
                <p className={styles.text}>
                  Мы сравнили рынки США с Европейскими и поняли, что покупка автомобиля в Америке
                  выгоднее в несколько раз, как бы парадоксально это не звучало. Это вызвано
                  продуманной логистикой, уровнем развития сервисов по оцениванию состояния авто и
                  самим процессом покупки автомобиля.
                </p>

                <p className={styles.text}>
                  Большинство граждан США берут автомобиль в лизинг на несколько лет и все время
                  эксплуатации сама лизинговая компания занимается постоянным ТО автомобиля,
                  вследствие чего, машины из США – один из лучших выборов для автолюбителей Украины.
                </p>
              </div>
            </div>

            <div className={styles.contentBox}>
              <h3 className="contentTitle">Из-за чего такая низкая цена?</h3>

              <div className={styles.textBox}>
                <p className={styles.text}>
                  Битые автомобили из США выкупаются с аукционов страховых компаний. На этих
                  аукционах машина теряет половину цены даже из-за минимальных повреждений. Если
                  учитывать денежные затраты, а именно выкуп, доставку, таможню и ремонт, то цена
                  аналогичного по состоянию автомобиля в Украине будет выше на 35-50%, а новые будут
                  стоить космических денег.
                </p>
              </div>
            </div>

            <ButtonBlockLink
              className="onBrightBG decor"
              link="/"
              text="Консультация эксперта"
              title="Консультация эксперта"
              type={undefined}
            />
          </div>

          <ol className={styles.servicesList}>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Покупка авто</p>
              <p className={styles.itemText}>Подбор автомобиля и экспертная проверка</p>
            </li>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Доставка морем</p>
              <p className={styles.itemText}>Расчет оптимальной стоимости доставки авто</p>
            </li>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Растаможка авто</p>
              <p className={styles.itemText}>Прохождение таможенного оформления (2-3 дня)</p>
            </li>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Ремонт авто</p>
              <p className={styles.itemText}>Комплексный ремонт автомобиля на СТО</p>
            </li>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Сертификация</p>
              <p className={styles.itemText}>Услуга предоставляется по желанию</p>
            </li>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Постановка на учет</p>
              <p className={styles.itemText}>Оформление автомобиля в Украине</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
