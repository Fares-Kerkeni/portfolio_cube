import { Swiper, SwiperSlide } from "swiper/react";
import style from "./works.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import Nav from "../../components/nav/Nav";
import All_works from "../../components/all_works/All_works";
import { Scrollbar, A11y, EffectCube, Mousewheel } from "swiper/modules";

function Works() {
  return (
    <>
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
      >
        <SwiperSlide className={style.fullPageSlide}>
          <Nav />
          <All_works />
        </SwiperSlide>
        {/* <SwiperSlide className={style.fullPageSlide}>salut</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Works;
