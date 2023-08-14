// Libraries
import React from "react";
import Slider from "react-slick";
// (end of) Libraries

// Images
import InfinityQX50 from "../../assets/img/carousel/infinity-qx50-2016.jpg";
import LexusES from "../../assets/img/carousel/lexus-es-2013.jpg";
import TeslaModel3 from "../../assets/img/carousel/tesla-model3-2018.jpg";
// (end of) Images

// Styles
import styles from "./Carousel.module.scss";
// (end of) Styles

export const Carousel: React.FC = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className="sectionTitle">Пригнанные нами авто</h2>

        <div className={`${styles.inner} carousel`}>
          <Slider {...settings}>
            <div className={styles.item}>
              <div className={styles.itemBox}>
                <img className={styles.itemImg} src={InfinityQX50} alt="carousel car" />

                <h4 className={styles.title}>Infiniti QX50 2016 г.</h4>
                <p className={styles.itemText}>Экономия 4500 &#36;</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.itemBox}>
                <img className={styles.itemImg} src={LexusES} alt="carousel car" />

                <h4 className={styles.title}>Lexus ES 2013 г.</h4>
                <p className={styles.itemText}>Экономия 5500 &#36;</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.itemBox}>
                <img className={styles.itemImg} src={TeslaModel3} alt="carousel car" />

                <h4 className={styles.title}>Tesla Model 3 2018 г.</h4>
                <p className={styles.itemText}>Экономия 5500 &#36;</p>
              </div>
            </div>

            {/* Cars repeat */}
            <div className={styles.item}>
              <div className={styles.itemBox}>
                <img className={styles.itemImg} src={InfinityQX50} alt="carousel car" />

                <h4 className={styles.title}>Infiniti QX50 2016 г.</h4>
                <p className={styles.itemText}>Экономия 4500 &#36;</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.itemBox}>
                <img className={styles.itemImg} src={LexusES} alt="carousel car" />

                <h4 className={styles.title}>Lexus ES 2013 г.</h4>
                <p className={styles.itemText}>Экономия 5500 &#36;</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.itemBox}>
                <img className={styles.itemImg} src={TeslaModel3} alt="carousel car" />

                <h4 className={styles.title}>Tesla Model 3 2018 г.</h4>
                <p className={styles.itemText}>Экономия 5500 &#36;</p>
              </div>
            </div>
            {/* (end of) Cars repeat */}
          </Slider>
        </div>
      </div>
    </section>
  );
};
