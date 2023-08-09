// Libraries
import React from "react";
// (end of) Libraries

// Images
import decorCar from "../../assets/img/decor/header-car.png";
// (end of) Images

// Blocks
import { ButtonBlockLink } from "../../blocks/ButtonBlock/ButtonBlockLink";
import { LogoBlock } from "../../blocks/LogoBlock";
import { SocialBlock } from "../../blocks/SocialBlock";
// (end of) Blocks

// Styles
import styles from "./Header.module.scss";
// (end of) Styles

export const Header: React.FC = () => {
  return (
    <header className={`header ${styles.root}`}>
      <div className="container">
        <div className={styles.top}>
          <LogoBlock />

          <a className={styles.phone} href="tel:+380505556677" title="Позвонить">
            +38 (050) 555 66 77
          </a>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Авто из США &#8220;под ключ&#8221;</h1>

          <strong className={styles.motto}>Закажи себе авто из США с выгодой до 40&#37;</strong>

          <p className={styles.text}>
            Подбор, покупка, доставка, растаможка, ремонт, оформление по договору
          </p>

          <ButtonBlockLink
            className=""
            link="/"
            text="Консультация эксперта"
            title="Консультация эксперта"
            type={undefined}
          />

          <SocialBlock />

          <img className={styles.decorCar} width="814" height="462" src={decorCar} alt="car" />
        </div>
      </div>
    </header>
  );
};
