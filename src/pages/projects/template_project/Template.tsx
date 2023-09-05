import { Swiper, SwiperSlide } from "swiper/react";
import style from "./template.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import Nav from "../../../components/nav/Nav";
import { Scrollbar, A11y, EffectCube, Mousewheel } from "swiper/modules";
import { usePageContext } from "../../../PageContext";
import flag from "../../../assets/flags.jpg";
import barber from "../../../assets/barber.jpg";
import jungle from "../../../assets/plantes.jpg";
import fleche from "../../../assets/fleche.png";
interface Props {
  titre: string;
  description: string;
  lien: string;
}
function Template(props: Props): JSX.Element {
  const { activePage } = usePageContext();

  return (
    console.log(props.titre),
    (
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
          mousewheel={true}
          speed={900}
        >
          <SwiperSlide className={style.fullPageSlide}>
            {" "}
            <Nav />
            <div className={style.container_first_page}>
              <div className={style.container_first_page__title}>
                <h1 className={style.title}>{props.titre}</h1>
                <div className={style.ligne}></div>
              </div>
              <div className={style.container_first_page__image}>
                {activePage === "all_countries" && <img src={flag} alt="" />}
                {activePage === "la_maison_jungle" && (
                  <img src={jungle} alt="" />
                )}
                {activePage === "barberplus" && <img src={barber} alt="" />}
              </div>
              <div className={style.scroll_img}>
                <a href="" className={style.scrollDown}>
                  <span></span>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.fullPageSlide}>
            <Nav />
            <div className={style.container_dexieme}>
              <div className={style.container_dexieme__title}>
                <div className={style.title}>ABOUT THE PROJECT</div>
                <div className={style.date}></div>
              </div>
              <div className={style.container_dexieme__text}>
                <div className={style.text}> {props.description}</div>
                <div className={style.button}>
                  <a href={props.lien} target="blank">
                    Lien vers site <img src={fleche} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    )
  );
}

export default Template;
