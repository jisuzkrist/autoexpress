// Libraries
import React from "react";
import { Link } from "react-router-dom";
// (end of) Libraries

// Images
import decorCar from "../../assets/img/decor/header-car.png";
import logo from "../../assets/img/logo.svg";
import socialFacebook from "../../assets/img/icons/social/facebook.svg";
import socialInstagram from "../../assets/img/icons/social/instagram.svg";
import socialTelegram from "../../assets/img/icons/social/telegram.svg";
import socialWhatsapp from "../../assets/img/icons/social/whatsapp.svg";
// (end of) Images

// Styles
import styles from "./Header.module.scss";
// (end of) Styles

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className="container">
        <div className={styles.top}>
          <Link to="/" className={styles.logo}>
            <img width="197" src={logo} alt="logo" title="На главную" />
          </Link>

          <a className={styles.phone} href="tel:+380505556677" title="Позвонить">
            +38 (050) 555 66 77
          </a>
        </div>

        <div className={styles.content}>
          <h1 className="title">Авто из США &#8220;под ключ&#8221;</h1>

          <strong className="motto">Закажи себе авто из США с выгодой до 40&#37;</strong>

          <p className={styles.text}>
            Подбор, покупка, доставка, растаможка, ремонт, оформление по договору
          </p>

          <a className="button" title="Консультация эксперта" href="#">
            Консультация эксперта
          </a>

          <div className={styles.social}>
            <ul className="socialLinks">
              <li>
                <a
                  href="https://www.instagram.com"
                  title="Instagram"
                  target="_blank"
                  rel="noreferrer">
                  <img width="25" height="25" src={socialInstagram} alt="instagram icon" />
                </a>
              </li>
              <li>
                <a href="https://telegram.org" title="Telegram" target="_blank" rel="noreferrer">
                  <img width="25" height="19" src={socialTelegram} alt="telegram icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.whatsapp.com"
                  title="WhatsApp"
                  target="_blank"
                  rel="noreferrer">
                  <img width="25" height="25" src={socialWhatsapp} alt="whatsapp icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  title="Facebook"
                  target="_blank"
                  rel="noreferrer">
                  <img width="14" height="25" src={socialFacebook} alt="facebook icon" />
                </a>
              </li>
            </ul>
          </div>

          <img className={styles.decorCar} width="814" height="462" src={decorCar} alt="car" />
        </div>
      </div>
    </header>
  );
};
