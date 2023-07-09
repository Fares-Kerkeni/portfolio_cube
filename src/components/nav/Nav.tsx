import style from "./nav.module.scss";
import { useSwiper } from "../../SwiperContext";
function Nav() {
  const { swiper } = useSwiper();

  const navigateTo = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };
  return (
    <>
      <nav className={style.container}>
        <div className={style.logo}>
          <h1>Fares.Dev</h1>
        </div>
        <div className={style.navigation}>
          <button onClick={() => navigateTo(0)} className={style.button_nav}>
            Home
          </button>
          <button onClick={() => navigateTo(1)} className={style.button_nav}>
            Works
          </button>
          <button onClick={() => navigateTo(2)} className={style.button_nav}>
            About
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
