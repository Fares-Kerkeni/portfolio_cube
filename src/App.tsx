import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Scrollbar, A11y, EffectCube, Mousewheel } from "swiper/modules";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Works from "./pages/works/Works";
import Switch_project from "./pages/projects/switch_project/Switch_project";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import style from "./app.module.scss";
import { SwiperContext } from "./SwiperContext";
import { useState } from "react";

const App: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={style.container}>
      <SwiperContext.Provider value={{ swiper, setSwiper }}>
        <Swiper
          simulateTouch={false}
          onSwiper={setSwiper}
          modules={[Scrollbar, A11y, EffectCube, Mousewheel]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          effect={"cube"}
          className={style.fullPageSlide}
          speed={900}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
        >
          <SwiperSlide className={style.fullPageSlide}>
            <Home />
          </SwiperSlide>
          <SwiperSlide className={style.fullPageSlide}>
            <Works />
          </SwiperSlide>
          <SwiperSlide className={style.fullPageSlide}>
            <About />
          </SwiperSlide>
          <SwiperSlide className={style.fullPageSlide}>
            <Switch_project />
          </SwiperSlide>
        </Swiper>
      </SwiperContext.Provider>
    </div>
  );
};

export default App;
