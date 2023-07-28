import { Swiper, SwiperSlide } from "swiper/react";
import style from "./about.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import Nav from "../../components/nav/Nav";
import { Scrollbar, A11y, EffectCube, Mousewheel } from "swiper/modules";
import barber from "../../assets/workspace-g364a7d8fe_1280.jpg";
function About() {
  return (
    <>
      <Swiper
        modules={[Scrollbar, A11y, EffectCube, Mousewheel]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"cube"}
        direction="vertical"
        className={style.container}
        speed={900}
      >
        <SwiperSlide className={style.fullPageSlide}>
          <Nav />
          <div className={style.conatiner_about}>
            <div className={style.about}>
              <div className={style.img}>
                <img src={barber} alt="" />
              </div>
              <div className={style.text}>
                <h1>ABOUT</h1>
                <p className={style.sous_title}>
                  Un développeur Front-End dévoué
                </p>
                <p className={style.txt}>
                  En tant que Développeur Front-End Junior, je possède un
                  impressionnant arsenal de compétences en HTML, CSS,
                  JavaScript, React et SCSS. J'excelle dans la conception et la
                  maintenance de sites web réactifs offrant une expérience
                  utilisateur fluide. Mon expertise réside dans la création
                  d'interfaces dynamiques et attrayantes en écrivant un code
                  propre et optimisé, et en utilisant des outils et techniques
                  de développement de pointe.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default About;
