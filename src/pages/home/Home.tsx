import style from "./home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import sass from "../../assets/sass.png";
import cube from "../../assets/cube.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";

import Nav from "../../components/nav/Nav";
import { Scrollbar, A11y, EffectCube, Mousewheel } from "swiper/modules";
function Home() {
  return (
    <>
      <div className={style.container}>
        <Swiper
          modules={[Scrollbar, A11y, EffectCube, Mousewheel]}
          mousewheel={true}
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
            <div className={style.container_home}>
              <div className={style.container_me}>
                <div className={style.cube_and_text}>
                  <div className={style.container_me_text}>
                    <div className={style.title}>Front-End React Developer</div>
                    <div className={style.contenu}>
                      Hi, I'm Fares Kerkeni. A passionate Front-End React
                      Developer based in Paris, France.
                    </div>
                    <div className={style.reseaux}>
                      <a
                        href="https://www.linkedin.com/in/fares-kerkeni-%F0%9F%9A%80-futur-d%C3%A9veloper-front-react-2718271b7/"
                        className={style.lien}
                      >
                        <img src={linkedin} alt="linkedin" />
                      </a>
                      <a
                        href="https://github.com/Fares-Kerkeni?tab=repositories"
                        className={style.lien}
                      >
                        <img src={github} alt="github" />
                      </a>
                    </div>
                  </div>
                  <div className={style.container_me_cube}>
                    <img src={cube} alt="cube" />
                  </div>
                </div>

                <div className={style.container_me_tech_stack}>
                  <div className={style.title}>Tech Stack |</div>
                  <div className={style.logo_stack}>
                    <img src={html} alt="logo html" />
                    <img src={css} alt="css" />
                    <img src={js} alt="js" />
                    <img src={react} alt="react" />
                    <img src={sass} alt="sass" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;
