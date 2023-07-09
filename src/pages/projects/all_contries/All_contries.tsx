import { Swiper, SwiperSlide } from "swiper/react";
import style from "./all_contries.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import Nav from "../../../components/nav/Nav";
import { Scrollbar, A11y, EffectCube, Mousewheel } from "swiper/modules";

function All_contries() {
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
      >
        <SwiperSlide className={style.fullPageSlide}>
          {" "}
          <Nav />
          All_contriesddd
        </SwiperSlide>
        <SwiperSlide className={style.fullPageSlide}>All_contries</SwiperSlide>
      </Swiper>
    </>
  );
}

export default All_contries;
